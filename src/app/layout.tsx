// src/app/layout.tsx
import AuthWrapper from './AuthWrapper';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Giving Hands Alliance CMS',
  description: 'Charity Management System',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gha-dark text-gha-white min-h-screen">
        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}
