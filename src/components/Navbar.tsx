import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { userRole } = useAuth();

  return (
    <header className="p-4 border-b border-gha-gray flex justify-between items-center bg-gha-dark">
      <div className="font-bold text-lg">Giving Hands Alliance - {userRole?.toUpperCase() || 'Guest'}</div>
      <div>
        {/* Placeholder for notifications/profile */}
        <button className="bg-gha-orange rounded px-3 py-1 hover:bg-orange-700 transition">Logout</button>
      </div>
    </header>
  );
}
