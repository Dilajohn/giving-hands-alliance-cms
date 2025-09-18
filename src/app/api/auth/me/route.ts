import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies(); // async cookie store accessor
  const token = cookieStore.get('authToken')?.value;

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
