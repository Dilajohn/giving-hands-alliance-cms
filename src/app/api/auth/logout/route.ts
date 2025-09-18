// Root layout for all pages.
// Applies Tailwind base styles and sets up the main HTML structure.
// Customizes background and text colors using Tailwind config.
// API route for user logout.
// Accepts POST requests.
// Clears authToken and refreshToken cookies by setting them to expire.

import { NextResponse } from 'next/server';
import cookie from 'cookie';

export async function POST() {
  const response = NextResponse.json({ message: 'Logged out' }, { status: 200 });
  response.headers.append('Set-Cookie', cookie.serialize('authToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0),
    sameSite: 'strict',
    path: '/',
  }));
  response.headers.append('Set-Cookie', cookie.serialize('refreshToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0),
    sameSite: 'strict',
    path: '/',
  }));

  return response;
}

