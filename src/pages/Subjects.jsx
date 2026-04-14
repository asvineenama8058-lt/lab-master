import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjectsList, practicalsData } from '../data/mockData';
import { Activity, Star, Layers, Filter, ChevronRight } from 'lucide-react';

function Subjects() {
  const navigate = useNavigate();
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  // Flattened list of all important practicals across all subjects
  const allImportantPracticals = useMemo(() => {
    const list = [];
    Object.entries(practicalsData).forEach(([subjectId, practicals]) => {
      const subject = subjectsList.find(s => s.id === subjectId);
      practicals.forEach(p => {
        if (p.isImportant) {
          list.push({ ...p, subjectId, subjectTitle: subject?.title, subjectColor: subject?.color });
        }
      });
    });
    return list;
  }, []);

  return (
    <div className="subjects-page">
      <div style={{ marginBottom: '1.5rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '1.50rem', color: 'var(--text-main)', margin: 0 }}>Syllabus</h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>{showImportantOnly ? 'High-yield exam topics' : 'Select a subject to explore'}</p>
        </div>
        <button 
          onClick={() => setShowImportantOnly(!showImportantOnly)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.5rem 0.75rem', 
            borderRadius: '20px',
            border: `1px solid ${showImportantOnly ? 'var(--warning)' : 'var(--border)'}`,
            background: showImportantOnly ? '#FFFBEB' : 'var(--surface)',
            color: showImportantOnly ? '#D97706' : 'var(--text-muted)',
            fontSize: '0.85rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {showImportantOnly ? <Star size={16} fill="#D97706" /> : <Filter size={16} />}
          {showImportantOnly ? 'Show All' : 'High Yield'}
        </button>
      </div>

      {!showImportantOnly ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
          gap: '1rem' 
        }}>
          {subjectsList.map(subject => (
            <div 
              key={subject.id} 
              className="card"
              style={{ 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.5rem 1rem',
                borderTop: `4px solid ${subject.color}`,
                transition: 'transform 0.2s'
              }}
              onClick={() => navigate(`/subjects/${subject.id}`)}
            >
              <div style={{ 
                background: subject.color + '15',
                color: subject.color,
                padding: '1rem',
                borderRadius: '50%',
                marginBottom: '1rem',
                boxShadow: `0 4px 10px ${subject.color}10`
              }}>
                <Activity size={32} />
              </div>
              <h3 style={{ fontSize: '0.95rem', margin: '0 0 0.25rem 0', fontWeight: 'bold' }}>{subject.title}</h3>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{practicalsData[subject.id]?.length || 0} Practicals</span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {allImportantPracticals.map(prac => (
            <div 
              key={`${prac.subjectId}-${prac.id}`} 
              className="card"
              style={{ padding: '1rem', cursor: 'pointer', borderLeft: `4px solid #D97706`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              onClick={() => navigate(`/subjects/${prac.subjectId}`)}
            >
              <div>
                <div style={{ fontSize: '0.7rem', color: prac.subjectColor, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{prac.subjectTitle}</div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-main)' }}>{prac.title}</h3>
              </div>
              <ChevronRight size={20} color="var(--text-muted)" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Subjects;
