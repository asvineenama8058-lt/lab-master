import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { dailyTip, subjectsList, practicalsData } from '../data/mockData';
import { BookOpen, HelpCircle, Activity, ChevronRight, Search, X, Sparkles, Trophy } from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  // Search logic: Search across all practicals in all subjects
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const results = [];
    Object.entries(practicalsData).forEach(([subjectId, practicals]) => {
      const subject = subjectsList.find(s => s.id === subjectId);
      practicals.forEach(p => {
        if (
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.principle.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          results.push({ ...p, subjectId, subjectTitle: subject?.title, subjectColor: subject?.color });
        }
      });
    });
    return results.slice(0, 15); // Limit to top 15 results for performance
  }, [searchQuery]);

  return (
    <div className="home-page">
      <section className="welcome-section" style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>
          Welcome, {user?.name || 'Future Lab Master'}!
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Ready for your practicals today?</p>
      </section>

      {/* Global Search Bar */}
      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <div style={{ 
          background: 'var(--surface)', 
          padding: '0.75rem 1rem', 
          borderRadius: '12px',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <Search size={20} color={searchQuery ? 'var(--primary)' : 'var(--text-muted)'} />
          <input 
            type="text" 
            placeholder="Search for tests, procedures, instruments..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              width: '100%', 
              border: 'none', 
              background: 'none', 
              outline: 'none',
              fontSize: '1rem',
              color: 'var(--text-main)'
            }}
          />
          {searchQuery && (
            <X size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} onClick={() => setSearchQuery('')} />
          )}
        </div>

        {/* Search Results Dropdown/Overlay */}
        {searchQuery.trim() !== '' && (
          <div style={{ 
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--surface)',
            borderRadius: '12px',
            marginTop: '0.5rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            border: '1px solid var(--border)',
            zIndex: 100,
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>
              {searchResults.length > 0 ? `Found ${searchResults.length} practicals` : 'No practicals found'}
            </div>
            {searchResults.map(p => (
              <div 
                key={`${p.subjectId}-${p.id}`}
                onClick={() => navigate(`/subjects/${p.subjectId}`)} // Note: In a real app we'd navigate direct to practical
                style={{ 
                  padding: '1rem',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-main)' }}>{p.title}</div>
                  <div style={{ fontSize: '0.75rem', color: p.subjectColor }}>{p.subjectTitle}</div>
                </div>
                <ChevronRight size={16} color="var(--text-muted)" />
              </div>
            ))}
          </div>
        )}
      </div>

      {!searchQuery.trim() && (
        <>
          <section className="quick-access" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            <div className="card" onClick={() => navigate('/subjects')} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.25rem 0.5rem' }}>
              <div style={{ background: '#E0F2FE', color: '#0284C7', padding: '0.75rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ fontSize: '0.95rem', margin: '0 0 0.2rem 0' }}>Syllabus</h3>
              <p style={{ fontSize: '0.75rem', margin: 0, opacity: 0.7 }}>View all subjects</p>
            </div>

            <div className="card" onClick={() => navigate('/chatbot')} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.25rem 0.5rem', border: '2px solid var(--primary-light, #e0f2fe)' }}>
              <div style={{ background: 'var(--primary)', color: 'white', padding: '0.75rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '0.95rem', margin: '0 0 0.2rem 0', color: 'var(--primary)' }}>AI Assistant</h3>
              <p style={{ fontSize: '0.75rem', margin: 0, opacity: 0.7 }}>Instant help</p>
            </div>

            <div className="card" onClick={() => navigate('/leaderboard')} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.25rem 0.5rem' }}>
              <div style={{ background: '#FEF3C7', color: '#D97706', padding: '0.75rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                <Trophy size={24} />
              </div>
              <h3 style={{ fontSize: '0.95rem', margin: '0 0 0.2rem 0' }}>Rankings</h3>
              <p style={{ fontSize: '0.75rem', margin: 0, opacity: 0.7 }}>Global leaderboard</p>
            </div>

            <div className="card" onClick={() => navigate('/quiz/hem')} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.25rem 0.5rem' }}>
              <div style={{ background: '#DCFCE7', color: '#16A34A', padding: '0.75rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
                <HelpCircle size={24} />
              </div>
              <h3 style={{ fontSize: '0.95rem', margin: '0 0 0.2rem 0' }}>Daily Quiz</h3>
              <p style={{ fontSize: '0.75rem', margin: 0, opacity: 0.7 }}>Test your skills</p>
            </div>
          </section>

          <section className="daily-tip card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              💡 {dailyTip.title}
            </h3>
            <p style={{ fontSize: '0.9rem' }}>{dailyTip.content}</p>
          </section>

          <section className="popular-subjects">
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Popular Subjects
              <span onClick={() => navigate('/subjects')} style={{ fontSize: '0.8rem', color: 'var(--primary)', cursor: 'pointer' }}>View All</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {subjectsList.slice(0, 3).map(subject => (
                <div 
                  key={subject.id} 
                  className="card" 
                  style={{ display: 'flex', alignItems: 'center', padding: '1rem', cursor: 'pointer' }}
                  onClick={() => navigate(`/subjects/${subject.id}`)}
                >
                  <div style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '8px', 
                    backgroundColor: subject.color + '20', 
                    color: subject.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <Activity size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{subject.title}</h4>
                  </div>
                  <ChevronRight size={20} color="var(--text-muted)" />
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
