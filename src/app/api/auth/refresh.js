import { verify, sign } from 'jsonwebtoken';
import cookie from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'No refresh token' });
  }

  try {
    const decoded = verify(refreshToken, process.env.JWT_SECRET || 'secret');

    const newToken = sign({ username: decoded.username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

    res.setHeader('Set-Cookie', cookie.serialize('authToken', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600,
      sameSite: 'strict',
      path: '/',
    }));

    return res.status(200).json({ message: 'Token refreshed' });
  } catch {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
}
