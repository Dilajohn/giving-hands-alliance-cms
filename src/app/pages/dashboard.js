import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gha-dark text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-gha-orange rounded hover:bg-orange-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
