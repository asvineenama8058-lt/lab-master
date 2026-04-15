import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import AppLayout from './components/Layout/AppLayout';
import LoadingState from './components/UX/LoadingState';
import ErrorBoundary from './components/UX/ErrorBoundary';
import './App.css';

// Lazy loading components for code splitting
const Home = lazy(() => import('./pages/Home'));
const Subjects = lazy(() => import('./pages/Subjects'));
const SubjectDetail = lazy(() => import('./pages/SubjectDetail'));
const QuizRunner = lazy(() => import('./pages/QuizRunner'));
const Bookmarks = lazy(() => import('./pages/Bookmarks'));
const Profile = lazy(() => import('./pages/Profile'));
const VivaView = lazy(() => import('./pages/VivaView'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Chatbot = lazy(() => import('./pages/Chatbot'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Component to protect routes
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <LoadingState />;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ProgressProvider>
          <AppProvider>
            <BrowserRouter>
              <Suspense fallback={<LoadingState />}>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  
                  <Route path="/*" element={
                    <ProtectedRoute>
                      <AppLayout>
                        <Suspense fallback={<LoadingState />}>
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
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </Suspense>
                      </AppLayout>
                    </ProtectedRoute>
                  } />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </AppProvider>
        </ProgressProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
