import cookie from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  res.setHeader('Set-Cookie', cookie.serialize('authToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0),
    sameSite: 'strict',
    path: '/',
  }));

  res.setHeader('Set-Cookie', cookie.serialize('refreshToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0),
    sameSite: 'strict',
    path: '/',
  }));

  res.status(200).json({ message: 'Logged out' });
}
