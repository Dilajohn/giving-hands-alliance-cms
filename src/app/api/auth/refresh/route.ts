// API route to refresh JWT token.
// Accepts POST requests.
// Verifies refreshToken cookie, issues new authToken cookie.
// Returns 401 if refresh token is missing or invalid.

import { NextResponse } from 'next/server';
import { verify, sign } from 'jsonwebtoken';
import cookie from 'cookie';

export async function POST(request: Request, { cookies }: { cookies: RequestCookies }) {
  const refreshToken = cookies.get('refreshToken')?.value;

  if (!refreshToken) {
    return NextResponse.json({ message: 'No refresh token' }, { status: 401 });
  }

  try {
    const decoded = verify(refreshToken, process.env.JWT_SECRET || 'secret');
    const newToken = sign({ username: (decoded as any).username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

    const response = NextResponse.json({ message: 'Token refreshed' }, { status: 200 });
    response.headers.append('Set-Cookie', cookie.serialize('authToken', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600,
      sameSite: 'strict',
      path: '/',
    }));

    return response;
  } catch {
    return NextResponse.json({ message: 'Invalid refresh token' }, { status: 401 });
  }
}
