import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import SubjectDetail from './pages/SubjectDetail';
import QuizRunner from './pages/QuizRunner';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';
import VivaView from './pages/VivaView';
import Leaderboard from './pages/Leaderboard';
import Chatbot from './pages/Chatbot';
import Login from './pages/Login';
import './App.css';

// Component to protect routes
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--bg-main)' }}>
        <div className="loader"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              
              <Route path="/*" element={
                <ProtectedRoute>
                  <AppLayout>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/subjects" element={<Subjects />} />
                      <Route path="/subjects/:id" element={<SubjectDetail />} />
                      <Route path="/quiz/:id" element={<QuizRunner />} />
                      <Route path="/viva/:practicalId" element={<VivaView />} />
                      <Route path="/bookmarks" element={<Bookmarks />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/leaderboard" element={<Leaderboard />} />
                      <Route path="/chatbot" element={<Chatbot />} />
                    </Routes>
                  </AppLayout>
                </ProtectedRoute>
              } />
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;
