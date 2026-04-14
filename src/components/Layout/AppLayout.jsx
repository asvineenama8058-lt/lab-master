import React from 'react';
import TopBar from './TopBar';
import BottomNav from './BottomNav';

function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <TopBar />
      <main className="main-content pt-safe pb-safe container">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

export default AppLayout;
