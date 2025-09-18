'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userRole } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userRole !== 'admin') {
      router.push('/login');  // Redirect to login if not admin
    }
  }, [userRole, router]);

  if (userRole !== 'admin') {
    // Optionally render null or a loading spinner while redirecting
    return null;
  }

  return (
    <div className="flex h-screen bg-gha-dark text-gha-white">
      <Sidebar role={userRole} />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="p-6 overflow-y-auto flex-grow">{children}</main>
      </div>
    </div>
  );
}

