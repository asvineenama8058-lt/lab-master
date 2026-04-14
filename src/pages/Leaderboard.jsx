import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { Trophy, Medal, ArrowLeft, User, Award, Loader2 } from 'lucide-react';

function Leaderboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, 'leaderboard'),
          orderBy('bestScore', 'desc'),
          limit(50)
        );
        
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setLeaders(data);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
        setError("Failed to load rankings. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();
  }, []);

  const getMedalIcon = (rank) => {
    switch(rank) {
      case 1: return <Trophy size={24} color="#FFD700" />; // Gold
      case 2: return <Medal size={24} color="#C0C0C0" />;  // Silver
      case 3: return <Medal size={24} color="#CD7F32" />;  // Bronze
      default: return null;
    }
  };

  return (
    <div className="leaderboard-page container pt-safe">
      <header style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', marginTop: '1rem' }}>
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Global Rankings</h1>
      </header>

      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 0' }}>
          <Loader2 className="animate-spin" size={48} color="var(--primary)" />
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Fetching top performers...</p>
        </div>
      ) : error ? (
        <div className="card" style={{ textAlign: 'center', padding: '2rem', color: 'var(--danger)' }}>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : leaders.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <Award size={64} color="var(--text-muted)" style={{ opacity: 0.3, marginBottom: '1rem' }} />
          <h2 style={{ color: 'var(--text-muted)' }}>No rankings yet.</h2>
          <p>Be the first to claim the top spot!</p>
          <button className="btn btn-primary" onClick={() => navigate('/subjects')} style={{ marginTop: '1rem' }}>
            Start a Quiz
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {leaders.map((leader, index) => {
            const rank = index + 1;
            const isMe = leader.username === user?.name;
            
            return (
              <div 
                key={leader.id} 
                className="card" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '1rem 1.25rem',
                  borderLeft: isMe ? '4px solid var(--primary)' : '1px solid var(--border)',
                  background: isMe ? 'var(--primary-light, #f0f9ff)' : 'var(--surface)',
                  transform: isMe ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                  zIndex: isMe ? 2 : 1,
                  boxShadow: isMe ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                <div style={{ 
                  width: '40px', 
                  fontWeight: '800', 
                  fontSize: '1.2rem', 
                  color: rank <= 3 ? 'var(--text-main)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {getMedalIcon(rank) || `#${rank}`}
                </div>

                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'var(--border)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '1rem',
                  color: 'var(--text-muted)'
                }}>
                  <User size={20} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>
                    {leader.username} {isMe && <span style={{ fontSize: '0.7rem', background: 'var(--primary)', color: 'white', padding: '0.1rem 0.4rem', borderRadius: '4px', marginLeft: '0.4rem' }}>YOU</span>}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)' }}>
                    {leader.bestScore}%
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    High Score
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
