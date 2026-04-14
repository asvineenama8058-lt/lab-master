import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { practicalsData, subjectsList } from '../data/mockData';
import { AppContext } from '../context/AppContext';
import { useProgress } from '../context/ProgressContext';
import { getTestImageContext } from '../utils/imageMapper';
import { ArrowLeft, Bookmark, Download, PlayCircle, CheckCircle, AlertTriangle, BookOpen, AlertCircle, ShieldAlert, Activity, Check } from 'lucide-react';

const WarningBox = ({ title, content, icon: Icon, color }) => {
  if (!content || (Array.isArray(content) && content.length === 0)) return null;
  
  const displayContent = Array.isArray(content) 
    ? <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>{content.map((c, i) => <li key={i}>{c}</li>)}</ul>
    : <p style={{ margin: 0 }}>{content}</p>;

  return (
    <div style={{
      backgroundColor: `${color}15`,
      borderLeft: `4px solid ${color}`,
      padding: '1rem',
      borderRadius: '0 8px 8px 0',
      marginBottom: '1rem',
      display: 'flex',
      gap: '0.75rem'
    }}>
      <Icon color={color} size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
      <div style={{ color: 'var(--text-main)', width: '100%' }}>
        <strong style={{ color: color, display: 'block', marginBottom: '0.4rem', fontSize: '1.05rem' }}>{title}</strong>
        {displayContent}
      </div>
    </div>
  );
};

const ArrayBox = ({ title, items }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="card" style={{ marginBottom: '1rem' }}>
      <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>{title}</h3>
      <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', margin: 0 }}>
        {items.map((item, i) => <li key={i} style={{ marginBottom: '0.4rem', lineHeight: '1.4' }}>{item}</li>)}
      </ul>
    </div>
  );
};

const ImageWithCaption = ({ src, alt, caption }) => {
  if (!src) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', scrollSnapAlign: 'start' }}>
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        style={{ 
          height: '220px', 
          minWidth: '220px', 
          borderRadius: '8px', 
          objectFit: 'cover', 
          border: '1px solid var(--border)' 
        }} 
      />
      <span style={{ 
        fontSize: '0.85rem', 
        color: 'var(--text-muted)', 
        textAlign: 'center',
        fontWeight: '500'
      }}>
        {caption}
      </span>
    </div>
  );
};

function SubjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookmarks, toggleBookmark } = useContext(AppContext);
  const { isCompleted } = useProgress();
  const [selectedPractical, setSelectedPractical] = useState(null);

  const subject = subjectsList.find(s => s.id === id);
  const practicals = practicalsData[id] || [];

  if (!subject) return <div className="container">Subject not found.</div>;

  const handlePrint = () => {
    window.print();
  };

  if (selectedPractical) {
    const isBookmarked = bookmarks.includes(selectedPractical.id);
    const p = selectedPractical;
    
    return (
      <div className="practical-detail-page pt-safe">
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', marginTop: '1rem' }}>
          <button className="icon-btn" onClick={() => setSelectedPractical(null)}>
            <ArrowLeft size={24} color="var(--text-main)" />
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              className="icon-btn" 
              onClick={() => toggleBookmark(selectedPractical.id)}
              style={{ transition: 'transform 0.2s ease', transform: isBookmarked ? 'scale(1.1)' : 'scale(1)' }}
            >
              <Bookmark 
                size={24} 
                fill={isBookmarked ? 'var(--primary)' : 'transparent'} 
                color={isBookmarked ? 'var(--primary)' : 'var(--text-main)'} 
                style={{ transition: 'all 0.3s ease' }}
              />
            </button>
            <button className="icon-btn" onClick={handlePrint}>
              <Download size={24} color="var(--text-main)" />
            </button>
          </div>
        </header>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <h1 style={{ fontSize: '1.6rem', color: subject.color, margin: 0 }}>{p.title}</h1>
          {p.isImportant && <span title="High Yield Topic" style={{ backgroundColor: '#FEF3C7', color: '#D97706', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>⭐ IMPORTANT</span>}
        </div>
        
        {p.definition && <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', margin: '0 0 1.5rem 0', fontStyle: 'italic', lineHeight: '1.5' }}>{p.definition}</p>}

        {(() => {
          const matchedImage = getTestImageContext(p.title).primary;
          return (
            <div style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1.5rem', scrollSnapType: 'x mandatory' }}>
              <ImageWithCaption src={matchedImage} alt="Main Procedure Diagram" caption={p.title} />
            </div>
          );
        })()}

        <div className="card" style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>Principle</h3>
          <p style={{ lineHeight: '1.6', color: 'var(--text-main)', margin: '0 0 1.25rem 0' }}>{p.principle}</p>
          {p.mechanism && (
             <div style={{ padding: '1rem', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
               <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Activity size={18} color="var(--primary)" />
                 Reaction Mechanism
               </h4>
               <p style={{ lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>{p.mechanism}</p>
             </div>
          )}
        </div>

        <ArrayBox title="Types & Classification" items={p.types} />

        {(p.specimen || p.equipment || p.requirements) && (
          <div className="card" style={{ marginBottom: '1.25rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {p.specimen && (
              <div style={{ flex: 1, minWidth: '250px' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>Specimen Requirements</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.5' }}>{p.specimen}</p>
              </div>
            )}
            {(p.equipment || p.requirements) && (
              <div style={{ flex: 1, minWidth: '250px' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>Equipment & Apparatus</h3>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', margin: 0 }}>
                  {(p.equipment || p.requirements).map((e, i) => <li key={i} style={{ marginBottom: '0.25rem' }}>{e}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}

        {p.reagents && p.reagents.length > 0 && (
          <div className="card" style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Reagents & Components</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {p.reagents.map((r, i) => (
                <div key={i} style={{ padding: '1rem', background: 'var(--bg)', borderRadius: '8px', borderLeft: `4px solid ${subject.color}` }}>
                  <strong style={{ color: 'var(--text-main)', fontSize: '1.05rem' }}>{r.component}</strong>
                  <div style={{ color: 'var(--text-muted)', marginTop: '0.4rem', fontSize: '0.95rem', lineHeight: '1.4' }}>{r.function}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {p.procedure && p.procedure.length > 0 && (
          <div className="card" style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Procedure</h3>
            <ol style={{ paddingLeft: '1.2rem', color: 'var(--text-main)', margin: 0 }}>
              {p.procedure.map((step, i) => (
                <li key={i} style={{ marginBottom: '1rem', lineHeight: '1.6', paddingLeft: '0.75rem' }}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1.25rem' }}>Results & Interpretation</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {p.observation && <div style={{ background: 'var(--bg)', padding: '0.75rem', borderRadius: '6px' }}><strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.25rem' }}>Observation:</strong> <span style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{p.observation}</span></div>}
            {p.result && <div style={{ background: 'var(--bg)', padding: '0.75rem', borderRadius: '6px' }}><strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.25rem' }}>Result / Finding:</strong> <span style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{p.result}</span></div>}
            {p.interpretation && <div style={{ background: 'var(--bg)', padding: '0.75rem', borderRadius: '6px' }}><strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.25rem' }}>Interpretation:</strong> <span style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{p.interpretation}</span></div>}
            {p.referenceRange && <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: '6px', border: '1px dashed var(--primary)' }}><strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.5rem' }}>Reference Range:</strong> <span style={{ color: 'var(--primary)', padding: '4px 10px', background: 'white', border: '1px solid var(--primary)', borderRadius: '4px', fontWeight: '600', fontSize: '1.1rem' }}>{p.referenceRange}</span></div>}
            {p.normalVsAbnormal && <div style={{ background: 'var(--bg)', padding: '0.75rem', borderRadius: '6px' }}><strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.25rem' }}>Normal vs Abnormal:</strong> <span style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{p.normalVsAbnormal}</span></div>}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
           <WarningBox title="Clinical Significance" content={p.clinicalSignificance} icon={Activity} color="#10b981" />
           <WarningBox title="Applications" content={p.applications} icon={CheckCircle} color="#3b82f6" />
           <WarningBox title="Important Notes" content={p.important} icon={AlertCircle} color="#3b82f6" />
           <WarningBox title="Limitations" content={p.limitations} icon={AlertTriangle} color="#ef4444" />
           <WarningBox title="Common Errors" content={p.sourcesOfError} icon={AlertTriangle} color="#f97316" />
           <WarningBox title="Safety & Precautions" content={p.precautions} icon={ShieldAlert} color="#8b5cf6" />
           <WarningBox title="Exam Focus" content={p.examPoints} icon={BookOpen} color="#ec4899" />
        </div>

        <div className="card" style={{ marginBottom: '1.25rem', marginTop: '1.5rem', background: `linear-gradient(135deg, ${subject.color}, ${subject.color}dd)`, color: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: 'white', margin: '0 0 1rem 0', fontSize: '1.3rem' }}>Ready to test your knowledge?</h3>
          <p style={{ margin: '0 0 1.25rem 0', opacity: 0.9 }}>Take a quick quiz to verify your understanding of {p.title}.</p>
          <button 
            className="btn" 
            style={{ width: '100%', background: 'white', color: subject.color, fontWeight: 'bold' }}
            onClick={() => navigate(`/quiz/${id}?practical=${p.id}`)}
          >
            <PlayCircle size={20} />
            Start Interactive Quiz
          </button>
        </div>
        
        {p.viva && p.viva.length > 0 && (
          <div className="card" style={{ marginBottom: '4rem', borderTop: `4px solid var(--warning)` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ color: 'var(--warning)', margin: 0 }}>Viva Questions</h3>
              <button 
                onClick={() => navigate(`/viva/${p.id}`)}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer' }}
              >
                Viva Mode →
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {p.viva.map((v, i) => (
                <div key={i} style={{ backgroundColor: 'var(--bg)', padding: '1rem', borderRadius: '8px' }}>
                  <p style={{ fontWeight: '700', color: 'var(--text-main)', margin: '0 0 0.5rem 0', lineHeight: '1.4' }}>Q: {v.q}</p>
                  <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.5', borderTop: '1px solid var(--border)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>A: {v.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="subject-practicals-page pt-safe">
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', marginTop: '1rem' }}>
        <button className="icon-btn" onClick={() => navigate('/subjects')} style={{ marginRight: '1rem' }}>
          <ArrowLeft size={24} color="var(--text-main)" />
        </button>
        <h1 style={{ fontSize: '1.6rem', margin: 0, color: subject.color }}>{subject.title}</h1>
      </header>

      {practicals.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)', background: 'var(--surface)', borderRadius: '12px' }}>
          No practicals documented for this subject yet.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {practicals.map(prac => {
            const completed = isCompleted(prac.id, id);
            return (
              <div 
                key={prac.id} 
                className="card" 
                style={{ 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  padding: '1.25rem',
                  borderLeft: prac.isImportant ? `4px solid #D97706` : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={() => setSelectedPractical(prac)}
              >
                {completed && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: 'var(--success)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '0 0 0 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold'
                  }}>
                    <Check size={12} strokeWidth={3} /> COMPLETED
                  </div>
                )}
                <div style={{ color: prac.isImportant ? '#D97706' : subject.color, marginRight: '1rem', marginTop: '2px' }}>
                  <CheckCircle size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ margin: '0 0 0.4rem 0', fontSize: '1.15rem', color: 'var(--text-main)', paddingRight: completed ? '80px' : '0' }}>{prac.title}</h3>
                    {prac.isImportant && <span style={{ fontSize: '1.2rem' }}>⭐</span>}
                  </div>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-muted)' }}>
                    {prac.isImportant ? 'High Yield Exam Topic' : 'Tap to view full procedure, references & viva'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SubjectDetail;
