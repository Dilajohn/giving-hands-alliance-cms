// Next.js middleware for route protection.
// Checks for valid authToken cookie on protected routes (/dashboard, /admin).
// Redirects unauthenticated users to /login.
// Allows public access to /login and auth API routes.
// Uses JWT verification.

import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(req: Request & { cookies: any }) {
  const token = req.cookies.get('authToken');

  const publicPaths = ['/login', '/api/auth/login', '/api/auth/logout', '/api/auth/refresh'];
  if (publicPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith('/dashboard') || req.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      verify(token, process.env.JWT_SECRET || 'secret');
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
