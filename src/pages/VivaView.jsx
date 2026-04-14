import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { practicalsData, subjectsList } from '../data/mockData';
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';

function VivaView() {
  const { practicalId } = useParams();
  const navigate = useNavigate();

  // Find the practical across all subjects
  let foundPractical = null;
  let foundSubject = null;

  for (const [subjId, practicals] of Object.entries(practicalsData)) {
    const p = practicals.find(item => item.id === practicalId);
    if (p) {
      foundPractical = p;
      foundSubject = subjectsList.find(s => s.id === subjId);
      break;
    }
  }

  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!foundPractical || !foundPractical.viva || foundPractical.viva.length === 0) {
    return (
      <div className="container pt-safe" style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <h2 style={{ color: 'var(--text-muted)' }}>No Viva questions available for this topic.</h2>
        <button className="btn btn-primary" onClick={() => navigate(-1)} style={{ marginTop: '1rem' }}>
          Go Back
        </button>
      </div>
    );
  }

  const questions = foundPractical.viva;
  const currentQ = questions[currentIdx];

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="viva-mode-page pt-safe container" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', marginTop: '1rem' }}>
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} color="var(--text-main)" />
        </button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: foundSubject?.color, fontWeight: 'bold' }}>{foundPractical.title}</div>
          <div style={{ fontWeight: '700', fontSize: '1rem' }}>Viva Flashcards</div>
        </div>
        <div style={{ width: '40px' }}></div>
      </header>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem', paddingBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span style={{ 
            background: 'var(--surface)', 
            padding: '4px 12px', 
            borderRadius: '12px', 
            fontSize: '0.8rem', 
            fontWeight: '600', 
            color: 'var(--text-muted)',
            border: '1px solid var(--border)'
          }}>
            Question {currentIdx + 1} of {questions.length}
          </span>
        </div>

        <div 
          className="card" 
          onClick={() => setShowAnswer(!showAnswer)}
          style={{ 
            minHeight: '300px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2.5rem',
            cursor: 'pointer',
            position: 'relative',
            perspective: '1000px',
            backgroundColor: showAnswer ? '#F8FAFC' : 'white',
            border: showAnswer ? `2px solid ${foundSubject?.color}40` : '1px solid var(--border)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
            borderRadius: '24px',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          {showAnswer ? (
            <div style={{ animation: 'fadeIn 0.3s ease-in' }}>
              <div style={{ color: foundSubject?.color, marginBottom: '1rem' }}>
                <BookOpen size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>{currentQ.a}</h3>
              <p style={{ position: 'absolute', bottom: '1.5rem', left: 0, right: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tap to see question</p>
            </div>
          ) : (
            <div style={{ animation: 'fadeIn 0.3s ease-in' }}>
              <div style={{ color: 'var(--warning)', marginBottom: '1.5rem' }}>
                <MessageSquareQuote size={48} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.4', margin: 0 }}>{currentQ.q}</h2>
              <p style={{ position: 'absolute', bottom: '1.5rem', left: 0, right: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tap to reveal answer</p>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="icon-btn" 
            onClick={handlePrev} 
            disabled={currentIdx === 0}
            style={{ 
              width: '60px', height: '60px', 
              background: 'white', 
              border: '1px solid var(--border)',
              opacity: currentIdx === 0 ? 0.3 : 1
            }}
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            className="btn btn-primary" 
            onClick={() => setShowAnswer(!showAnswer)}
            style={{ flex: 1, backgroundColor: foundSubject?.color, boxShadow: `0 4px 15px ${foundSubject?.color}30` }}
          >
            {showAnswer ? 'Show Question' : 'Reveal Answer'}
          </button>

          <button 
            className="icon-btn" 
            onClick={handleNext} 
            disabled={currentIdx === questions.length - 1}
            style={{ 
              width: '60px', height: '60px', 
              background: 'white', 
              border: '1px solid var(--border)',
              opacity: currentIdx === questions.length - 1 ? 0.3 : 1
            }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default VivaView;
