import React, { createContext, useState, useCallback } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const saveUserData = useCallback((data) => {
    const encrypted = btoa(JSON.stringify(data)); // Simple encoding pour local
    localStorage.setItem('miz_user_data', encrypted);
    setUserData(data);
  }, []);

  const loadUserData = useCallback(() => {
    try {
      const encrypted = localStorage.getItem('miz_user_data');
      if (encrypted) {
        const data = JSON.parse(atob(encrypted));
        setUserData(data);
        return data;
      }
    } catch (error) {
      console.error('Erreur chargement données:', error);
    }
    return null;
  }, []);

  return (
    <AppContext.Provider value={{ userData, setUserData, saveUserData, loadUserData, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};
