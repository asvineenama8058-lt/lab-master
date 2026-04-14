import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { subjectsList, practicalsData } from '../data/mockData';
import { Award, Target, LogOut, User, CheckCircle2, BookOpen } from 'lucide-react';

function Profile() {
  const { scores } = useContext(AppContext);
  const { user, logout } = useAuth();
  const { getUserSummary } = useProgress();

  const summary = getUserSummary(subjectsList, practicalsData);
  
  const totalAttempted = Object.keys(scores).length;
  let totalScore = 0;
  Object.values(scores).forEach(s => { totalScore += s; });
  const averageScore = totalAttempted > 0 ? Math.round(totalScore / totalAttempted) : 0;

  return (
    <div className="profile-page pt-safe">
      <div style={{ marginBottom: '2rem', marginTop: '1rem', textAlign: 'center' }}>
        <div style={{ 
          width: '90px', 
          height: '90px', 
          borderRadius: '24px', 
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 1rem', 
          fontSize: '2.5rem',
          boxShadow: '0 10px 20px rgba(var(--primary-rgb), 0.3)',
          transform: 'rotate(-5deg)'
        }}>
          {user?.name?.charAt(0).toUpperCase() || <User size={48} />}
        </div>
        <h1 style={{ fontSize: '1.75rem', color: 'var(--text-main)', margin: '0 0 0.25rem 0', fontWeight: '800' }}>{user?.name || 'Student'}</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>BMLT Practitioner</p>
        
        <button 
          onClick={logout}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--error)',
            fontSize: '0.9rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'var(--error)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = 'var(--error)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'var(--surface)';
            e.currentTarget.style.color = 'var(--error)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '4px solid var(--primary)' }}>
          <div style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><CheckCircle2 size={32} style={{ margin: '0 auto' }} /></div>
          <h2 style={{ fontSize: '1.75rem', margin: 0, fontWeight: '800' }}>{summary.totalCompleted}</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, fontWeight: '600', textTransform: 'uppercase' }}>Practicals Done</p>
        </div>
        
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '4px solid var(--warning)' }}>
          <div style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}><Award size={32} style={{ margin: '0 auto' }} /></div>
          <h2 style={{ fontSize: '1.75rem', margin: 0, fontWeight: '800' }}>{averageScore}%</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, fontWeight: '600', textTransform: 'uppercase' }}>Avg. Accuracy</p>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '2.5rem', padding: '1.5rem', background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Course Mastery</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: '800' }}>{summary.overallPercentage}%</div>
          </div>
          <div style={{ textAlign: 'right', opacity: 0.8, fontSize: '0.9rem' }}>
            {summary.totalCompleted} / {summary.totalPracticals} Tasks
          </div>
        </div>
        <div style={{ height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
          <div style={{ width: `${summary.overallPercentage}%`, height: '100%', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary)' }}></div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <BookOpen size={24} color="var(--primary)" />
        Subject Breakdown
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
        {Object.entries(summary.subjectProgress).map(([id, data]) => (
          <div key={id} className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: data.color }}></div>
                <span style={{ fontWeight: '700', color: 'var(--text-main)', fontSize: '1.05rem' }}>{data.name}</span>
              </div>
              <span style={{ fontWeight: '800', color: data.color }}>{data.percentage}%</span>
            </div>
            <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem' }}>
              <div style={{ width: `${data.percentage}%`, height: '100%', background: data.color, borderRadius: '4px' }}></div>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
              {data.completed} of {data.total} practicals mastered
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
