import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function GET(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  
  // Parse the cookie header to extract authToken
  const cookies = Object.fromEntries(
    cookieHeader.split('; ').map(cookieStr => {
      const [name, ...rest] = cookieStr.split('=');
      return [name, rest.join('=')];
    })
  );

  const token = cookies['authToken'];

  if (!token) {
    return NextResponse.json({ role: null }, { status: 401 });
  }

  try {
    const payload = verify(token, process.env.JWT_SECRET || 'secret');
    return NextResponse.json({ role: (payload as any).role || 'admin' });
  } catch {
    return NextResponse.json({ role: null }, { status: 401 });
  }
}
