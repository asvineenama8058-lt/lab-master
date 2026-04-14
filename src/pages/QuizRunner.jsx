import React, { useState, useContext, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { practicalsData, subjectsList } from '../data/mockData';
import { AppContext } from '../context/AppContext';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowLeft, CheckCircle, XCircle, Trophy, RefreshCcw, Home, Star } from 'lucide-react';

function QuizRunner() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  const { saveScore } = useContext(AppContext);
  const { updateProgress, getBestScore } = useProgress();
  const { user } = useAuth();
  
  const query = new URLSearchParams(search);
  const practicalId = query.get('practical');
  
  const subject = subjectsList.find(s => s.id === id);
  const practicals = practicalsData[id] || [];
  
  // Extract MCQs - filter by practical if practicalId is provided
  const questions = useMemo(() => {
    if (practicalId) {
      const specificPrac = practicals.find(p => p.id === practicalId);
      return specificPrac?.mcq || [];
    }
    return practicals.reduce((acc, prac) => {
      if (prac.mcq) return [...acc, ...prac.mcq];
      return acc;
    }, []);
  }, [practicals, practicalId]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!subject) return <div className="container">Subject not found.</div>;
  
  if (questions.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <h2 style={{ color: 'var(--text-muted)' }}>No MCQs available for this selection yet.</h2>
        <button className="btn btn-primary" onClick={() => navigate(-1)} style={{ marginTop: '1rem' }}>
          Go Back
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIdx];

  const handleOptionSelect = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQ.answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      const finalScore = score + (selectedOption === currentQ.answer && !isAnswered ? 1 : 0);
      const percentage = Math.round((score / questions.length) * 100);
      saveScore(id, percentage);
      if (practicalId) {
        updateProgress(practicalId, id, percentage);
      }
      
      // Save to Firebase Leaderboard (Global Best Score)
      saveGlobalBestScore(percentage);
      
      setIsFinished(true);
    }
  };

  const saveGlobalBestScore = async (newScore) => {
    if (!user?.name) return;
    
    try {
      const userRef = doc(db, 'leaderboard', user.name);
      const userDoc = await getDoc(userRef);
      
      if (!userDoc.exists() || newScore > userDoc.data().bestScore) {
        await setDoc(userRef, {
          username: user.name,
          bestScore: newScore,
          lastUpdated: serverTimestamp()
        }, { merge: true });
        console.log('Global best score updated!');
      }
    } catch (error) {
      console.error("Error updating leaderboard:", error);
    }
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-result container pt-safe" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 1.5rem' }}>
        <div style={{ 
          background: percentage >= 50 ? 'var(--success)' : 'var(--warning)', 
          color: 'white', 
          borderRadius: '50%', 
          padding: '2rem', 
          marginBottom: '1.5rem',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}>
          {percentage >= 70 ? <Trophy size={64} /> : <CheckCircle size={64} />}
        </div>
        <h1 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '2rem' }}>
          {percentage >= 70 ? 'Amazing Job!' : percentage >= 40 ? 'Good Effort!' : 'Keep Practicing!'}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', marginBottom: '2.5rem' }}>
          <div className="card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Current Score</div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: 0, fontWeight: '800' }}>{percentage}%</h2>
          </div>
          <div className="card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Best Score</div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--success)', margin: 0, fontWeight: '800' }}>{getBestScore(practicalId)}%</h2>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
          <button className="btn btn-primary" onClick={() => navigate(`/subjects/${id}`)} style={{ width: '100%' }}>
            <Home size={20} /> Back to Subject
          </button>
          <button className="btn" style={{ width: '100%', background: 'var(--surface)', border: '1px solid var(--border)' }} onClick={() => window.location.reload()}>
            <RefreshCcw size={20} /> Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-runner pt-safe container">
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', marginTop: '1rem' }}>
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} color="var(--text-main)" />
        </button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase' }}>{subject.title}</div>
          <div style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.9rem' }}>
            Question {currentIdx + 1} of {questions.length}
          </div>
        </div>
        <div style={{ width: '40px' }}></div> {/* spacer */}
      </header>

      {/* Progress Bar */}
      <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', marginBottom: '2rem', overflow: 'hidden' }}>
        <div style={{ 
          height: '100%', 
          background: subject.color, 
          width: `${((currentIdx + 1) / questions.length) * 100}%`,
          transition: 'width 0.3s ease'
        }}></div>
      </div>

      <div className="card" style={{ marginBottom: '2rem', borderTop: `4px solid ${subject.color}`, padding: '1.5rem' }}>
        <h2 style={{ fontSize: '1.3rem', lineHeight: '1.5', margin: 0, color: 'var(--text-main)' }}>{currentQ.q}</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {currentQ.options.map((opt, idx) => {
          let background = 'var(--surface)';
          let border = '1px solid var(--border)';
          let icon = null;
          let textColor = 'var(--text-main)';

          if (isAnswered) {
            if (idx === currentQ.answer) {
              background = '#ECFDF5'; 
              border = '1px solid #10B981';
              textColor = '#065F46';
              icon = <CheckCircle size={20} color="#10B981" />;
            } else if (idx === selectedOption) {
              background = '#FEF2F2'; 
              border = '1px solid #EF4444';
              textColor = '#991B1B';
              icon = <XCircle size={20} color="#EF4444" />;
            }
          } else if (selectedOption === idx) {
            border = `2px solid ${subject.color}`;
            background = `${subject.color}05`;
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              disabled={isAnswered}
              className="quiz-option-btn"
              style={{
                background,
                border,
                padding: '1.25rem',
                borderRadius: '12px',
                textAlign: 'left',
                color: textColor,
                fontSize: '1rem',
                cursor: isAnswered ? 'default' : 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.2s',
                fontWeight: selectedOption === idx ? '600' : '400'
              }}
            >
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ opacity: 0.5, fontWeight: 'bold' }}>{String.fromCharCode(65 + idx)}.</span>
                {opt}
              </div>
              {icon}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div style={{ marginTop: '2.5rem' }}>
          <button 
            className="btn btn-primary" 
            onClick={handleNext} 
            style={{ 
              width: '100%', 
              background: subject.color, 
              padding: '1.25rem', 
              fontSize: '1.1rem',
              boxShadow: `0 4px 15px ${subject.color}40`
            }}
          >
            {currentIdx + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizRunner;
