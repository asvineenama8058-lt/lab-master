import React, { useContext } from 'react';
import { Moon, Sun, Search, User } from 'lucide-react';
import { AppContext } from '../../context/AppContext';

function TopBar() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <header className="top-bar">
      <div className="top-bar-content container">
        <div className="brand">
          <span className="brand-logo">🔬</span>
          <span className="brand-text">Lab Master</span>
        </div>
        
        <div className="actions">
          <button className="icon-btn search-btn" aria-label="Search">
            <Search size={22} />
          </button>
          <button 
            className="icon-btn theme-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button className="icon-btn profile-btn" aria-label="Profile">
            <User size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
