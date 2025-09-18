import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function GET(request: Request) {
  const cookie = request.headers.get('cookie');
  // Parse cookie to get authToken
  const token = /* extract authToken from cookie string */;
  if (!token) {
    return NextResponse.json({ role: null }, { status: 401 });
  }

  try {
    const payload = verify(token, process.env.JWT_SECRET || 'secret');
    // Return user role from token payload or DB
    return NextResponse.json({ role: (payload as any).role || 'admin' });
  } catch {
    return NextResponse.json({ role: null }, { status: 401 });
  }
}
