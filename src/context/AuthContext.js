import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Simple auth context to store login state and selected role
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { email, role }
  const [bootstrapped, setBootstrapped] = useState(false);

  const signIn = async ({ email, password, role }) => {
    // NOTE: Replace with real API call. For now we simulate success after basic validation.
    if (!email || !password || !role) {
      throw new Error('Missing credentials');
    }
    // Simulate a network delay
    await new Promise((res) => setTimeout(res, 400));
    const u = { email, role };
    setUser(u);
    await AsyncStorage.setItem('auth:user', JSON.stringify(u));
  };

  const signOut = async () => {
    setUser(null);
    await AsyncStorage.removeItem('auth:user');
  };

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem('auth:user');
        if (raw) setUser(JSON.parse(raw));
      } finally {
        setBootstrapped(true);
      }
    })();
  }, []);

  const value = useMemo(() => ({ user, signIn, signOut, bootstrapped }), [user, bootstrapped]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};

export default AuthContext;
