import './globals.css';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Giving Hands Alliance CMS',
  description: 'Charity Management System',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gha-dark text-gha-white min-h-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

