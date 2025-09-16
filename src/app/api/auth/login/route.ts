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

import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username, password } = req.body;

  if (username === 'admin' && password === 'password123') {
    const token = sign({ username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    const refreshToken = sign({ username }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });

    res.setHeader('Set-Cookie', [
      cookie.serialize('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600,
        sameSite: 'strict',
        path: '/',
      }),
      cookie.serialize('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 604800,
        sameSite: 'strict',
        path: '/',
      }),
    ]);
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
