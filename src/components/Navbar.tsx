import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { userRole, setUserRole } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUserRole(null);
    router.push('/login');
  };

  return (
    <header className="p-4 border-b border-gha-gray flex justify-between items-center bg-gha-dark">
      <div className="font-bold text-lg">Giving Hands Alliance - {userRole?.toUpperCase() || 'Guest'}</div>
      <button
        onClick={handleLogout}
        className="bg-gha-orange rounded px-3 py-1 hover:bg-orange-700 transition"
      >
        Logout
      </button>
    </header>
  );
}
