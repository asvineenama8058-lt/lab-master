import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Bookmark, Award } from 'lucide-react';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={24} />
        <span>Home</span>
      </NavLink>
      
      <NavLink to="/subjects" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
        <BookOpen size={24} />
        <span>Subjects</span>
      </NavLink>
      
      <NavLink to="/bookmarks" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
        <Bookmark size={24} />
        <span>Saved</span>
      </NavLink>
      
      <NavLink to="/profile" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
        <Award size={24} />
        <span>Progress</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;
