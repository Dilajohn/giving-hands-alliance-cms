// Create API Route for Authentication
//Create a backend API endpoint to authenticate users
//Create a backend API endpoint to authenticate users ( src/app/api/auth/login.js).
//This endpoint will validate the username/password against stored data.
//On success, issue a JWT or session cookie.
//On failure, return an error message.
// API route for user login.
// Accepts POST requests with username and password.
// If credentials are valid, issues JWT and refresh token cookies.
// On failure, returns 401 Unauthorized.
// Uses 'jsonwebtoken' and 'cookie' libraries.

import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (username === 'admin' && password === 'password123') {
    const token = sign({ username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    const refreshToken = sign({ username }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });

    const response = NextResponse.json({ message: 'Login successful', role: 'admin' }, { status: 200 });
    response.headers.append('Set-Cookie', cookie.serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600,
      sameSite: 'strict',
      path: '/',
    }));
    response.headers.append('Set-Cookie', cookie.serialize('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 604800,
      sameSite: 'strict',
      path: '/',
    }));

    return response;
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
