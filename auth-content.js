// auth-context.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // For splash/loading state

  const [token, setToken] = useState('');

  // Check if user is logged in on app startup
  useEffect(() => {
      const loadUser = async () => {
        const storedUser = await AsyncStorage.getItem('userData');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          setToken(JSON.parse(storedUser).token);
        }
      };
      loadUser();
  }, []);

  const signIn = async (data) => {
    setUser(data); // Update the context state
    await AsyncStorage.setItem('userData', JSON.stringify(data));
  };

  const signOut = async () => {
    setUser(null);
    await AsyncStorage.removeItem('userData');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
