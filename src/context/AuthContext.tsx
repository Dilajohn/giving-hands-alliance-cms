import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AuthContextType = {
  userRole: string | null;
  setUserRole: (role: string | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<string | null>(null);

  // Optional: Initialize from localStorage or API on mount
  useEffect(() => {
    // Example: set default role 'admin' for testing
    setUserRole('admin');
  }, []);

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
