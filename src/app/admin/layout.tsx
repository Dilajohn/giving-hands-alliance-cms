import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userRole } = useAuth();

  if (userRole !== 'admin') {
    return <div className="p-10 text-center text-gha-orange">Unauthorized</div>;
  }

  return (
    <div className="flex h-screen bg-gha-dark text-gha-white">
      <Sidebar role={userRole} />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="p-6 overflow-y-auto flex-grow">{children}</main>
      </div>
    </div>
  );
}
