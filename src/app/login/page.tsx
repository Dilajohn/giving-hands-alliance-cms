// Login page component.
// Collects username and password, submits to /api/auth/login.
// On success, redirects to /dashboard.
// Shows error messages on failure.
// Styled with Tailwind CSS and uses custom colors from tailwind.config.js.

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (res.ok) {
        // No token storage here; cookie is http-only and set by server
        router.push('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch {
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gha-dark">
      <div className="w-full max-w-3xl flex shadow-lg rounded-lg overflow-hidden bg-gha-dark">
        {/* Left Side: Logo and Project Name */}
        <div className="w-1/2 flex flex-col items-center justify-center py-10 px-6 border-r border-gha-gray">
          <div className="mb-6">
            <svg width="48" height="48" viewBox="0 0 48 48" aria-label="Logo" role="img">
              <path d="M24 4C16 12 12 22 24 44C36 22 32 12 24 4Z" fill="#ef6c19" />
              <path d="M24 4C20 8 16 16 24 24C32 16 28 8 24 4Z" fill="#22a6a7" />
            </svg>
          </div>
          <h1 className="text-gha-white text-2xl font-semibold text-center tracking-wide">
            Giving Hands Alliance
          </h1>
          <span className="text-gha-gray mt-1 text-base text-center">Charity Management System</span>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-1/2 flex items-center justify-center py-10 px-6">
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <h2 className="text-gha-white text-xl font-medium mb-1">Welcome</h2>
            <p className="text-gha-gray text-sm mb-6 uppercase">Please login to admin dashboard.</p>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-2 px-3 rounded bg-gha-white text-gha-dark border border-gha-gray focus:outline-none focus:ring-2 focus:ring-gha-orange"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-3 rounded bg-gha-white text-gha-dark border border-gha-gray focus:outline-none focus:ring-2 focus:ring-gha-orange"
              required
            />

            {error && <p className="text-gha-orange text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-gha-orange text-gha-white py-2 rounded font-semibold hover:bg-orange-700 transition"
            >
              Login
            </button>

            <div className="mt-3 text-center">
              <a href="#" className="text-gha-gray text-xs underline hover:text-gha-orange transition">
                Forgotten your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
