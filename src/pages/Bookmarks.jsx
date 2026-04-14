import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { practicalsData, subjectsList } from '../data/mockData';
import { Bookmark, ChevronRight, Trash2, ArrowRight } from 'lucide-react';

function Bookmarks() {
  const { bookmarks, toggleBookmark } = useContext(AppContext);
  const navigate = useNavigate();

  // Find all bookmarked practicals with performance optimization
  const bookmarkedPracticals = useMemo(() => {
    const results = [];
    Object.keys(practicalsData).forEach(subjectId => {
      const subject = subjectsList.find(s => s.id === subjectId) || { color: 'var(--primary)', title: 'Subject' };
      const pracs = practicalsData[subjectId];
      pracs.forEach(prac => {
        if (bookmarks.includes(prac.id)) {
          results.push({ ...prac, subjectId, subjectTitle: subject.title, subjectColor: subject.color });
        }
      });
    });
    return results;
  }, [bookmarks]);

  const handleNavigate = (subjectId, pracId) => {
    // Navigate to subject detail first, then in SubjectDetail the logic can auto-select if needed.
    // For now, based on SubjectDetail implementation, we navigate to the subject and the user selects the practical.
    navigate(`/subjects/${subjectId}`);
  };

  return (
    <div className="bookmarks-page pt-safe">
      <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '10px' }}>
            <Bookmark size={24} fill="white" />
          </div>
          <h1 style={{ fontSize: '1.75rem', color: 'var(--text-main)', margin: 0, fontWeight: '800' }}>
            Saved Practicals
          </h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Your personalized list of important procedures and test methods.
        </p>
      </div>

      {bookmarkedPracticals.length === 0 ? (
        <div className="card" style={{ 
          textAlign: 'center', 
          padding: '4rem 2rem', 
          background: 'rgba(255,255,255,0.5)', 
          backdropFilter: 'blur(10px)',
          border: '2px dashed var(--border)',
          borderRadius: '24px'
        }}>
          <div style={{ 
            width: '80px', height: '80px', 
            background: 'var(--bg-main)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 1.5rem',
            color: 'var(--text-muted)'
          }}>
            <Bookmark size={40} style={{ opacity: 0.3 }} />
          </div>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>No saved practicals yet</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '300px', margin: '0 auto 2rem' }}>
            Browse through subjects and tap the bookmark icon to save procedures for quick access.
          </p>
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/subjects')}
            style={{ padding: '0.75rem 2rem' }}
          >
            Explore Subjects
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
          {bookmarkedPracticals.map(prac => (
            <div 
              key={prac.id} 
              className="card bookmark-card" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '1.25rem',
                borderLeft: `6px solid ${prac.subjectColor}`,
                transition: 'transform 0.2s',
                cursor: 'default'
              }}
            >
              <div 
                style={{ flex: 1, cursor: 'pointer' }}
                onClick={() => handleNavigate(prac.subjectId, prac.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: '800', 
                    color: prac.subjectColor, 
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    background: `${prac.subjectColor}15`,
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {prac.subjectTitle}
                  </span>
                </div>
                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: '700' }}>
                  {prac.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600' }}>
                  Open Procedure <ArrowRight size={14} />
                </div>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(prac.id);
                }}
                className="icon-btn"
                style={{ 
                  color: 'var(--error)', 
                  background: 'var(--bg-main)', 
                  width: '40px', 
                  height: '40px',
                  borderRadius: '10px'
                }}
                title="Remove from saved"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
