//Middleware to Protect Admin Routes ( /admin and /dashboard)

import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('authToken');

  // Allow public routes (including login)
  const publicPaths = ['/login', '/api/auth/login', '/api/auth/logout', '/api/auth/refresh'];
  if (publicPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Protect /dashboard and /admin routes
  if (req.nextUrl.pathname.startsWith('/dashboard') || req.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      verify(token, process.env.JWT_SECRET || 'secret');
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
