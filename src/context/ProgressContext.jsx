import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import { useAuth } from './AuthContext';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState({
    completedPracticals: {}, // { subjectId: [pracId1, pracId2] }
    bestScores: {}, // { pracId: percentage }
  });

  // Load progress when user changes
  useEffect(() => {
    if (user) {
      const storedProgress = localStorage.getItem(`lab_master_progress_${user.name}`);
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress));
      } else {
        setProgress({
          completedPracticals: {},
          bestScores: {},
        });
      }
    }
  }, [user]);

  // Sync progress to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(`lab_master_progress_${user.name}`, JSON.stringify(progress));
    }
  }, [progress, user]);

  const updateProgress = (pracId, subjectId, score) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      
      // Update completed practicals
      if (!newProgress.completedPracticals[subjectId]) {
        newProgress.completedPracticals[subjectId] = [];
      }
      if (!newProgress.completedPracticals[subjectId].includes(pracId)) {
        newProgress.completedPracticals[subjectId] = [...newProgress.completedPracticals[subjectId], pracId];
      }

      // Update best score
      const currentBest = newProgress.bestScores[pracId] || 0;
      if (score > currentBest) {
        newProgress.bestScores[pracId] = score;
      }

      return newProgress;
    });
  };

  const isCompleted = (pracId, subjectId) => {
    return progress.completedPracticals[subjectId]?.includes(pracId) || false;
  };

  const getBestScore = (pracId) => {
    return progress.bestScores[pracId] || 0;
  };

  const getUserSummary = (subjectsList, practicalsData) => {
    let totalPracticals = 0;
    let totalCompleted = 0;
    const subjectProgress = {};

    subjectsList.forEach(subject => {
      const subjectPracticals = practicalsData[subject.id] || [];
      const completedCount = progress.completedPracticals[subject.id]?.length || 0;
      const totalCount = subjectPracticals.length;
      
      totalPracticals += totalCount;
      totalCompleted += completedCount;
      
      subjectProgress[subject.id] = {
        name: subject.title,
        color: subject.color,
        completed: completedCount,
        total: totalCount,
        percentage: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
      };
    });

    return {
      totalPracticals,
      totalCompleted,
      overallPercentage: totalPracticals > 0 ? Math.round((totalCompleted / totalPracticals) * 100) : 0,
      subjectProgress
    };
  };

  const value = {
    progress,
    updateProgress,
    isCompleted,
    getBestScore,
    getUserSummary
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
