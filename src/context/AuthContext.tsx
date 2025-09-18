'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  userRole: string | null;
  setUserRole: (role: string | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
  async function fetchUserRole() {
    const res = await fetch('/api/auth/me');
    if (res.ok) {
      const data = await res.json();
      setUserRole(data.role);
    } else {
      setUserRole(null);
    }
  }
  fetchUserRole();
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
