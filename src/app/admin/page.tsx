'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function AdminDashboard() {
  const router = useRouter();
  const { setUserRole } = useAuth();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUserRole(null);
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gha-dark flex flex-col text-gha-white">
      <header className="flex justify-between items-center p-4 border-b border-gha-gray">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-gha-orange px-4 py-2 rounded hover:bg-orange-700 transition"
        >
          Logout
        </button>
      </header>

      <main className="flex-grow p-6 overflow-y-auto">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gha-dark p-6 rounded shadow border border-gha-gray">
            <h2 className="text-lg font-semibold mb-2">Total Donations</h2>
            <p className="text-3xl font-bold">UGX 125,000</p>
          </div>
          <div className="bg-gha-dark p-6 rounded shadow border border-gha-gray">
            <h2 className="text-lg font-semibold mb-2">Active Projects</h2>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-gha-dark p-6 rounded shadow border border-gha-gray">
            <h2 className="text-lg font-semibold mb-2">Volunteers</h2>
            <p className="text-3xl font-bold">45</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
          <div className="overflow-x-auto bg-gha-dark rounded border border-gha-gray">
            <table className="min-w-full divide-y divide-gha-gray">
              <thead className="bg-gha-dark">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Donor</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Project</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gha-gray">
                <tr>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">$500</td>
                  <td className="px-6 py-4">2025-09-10</td>
                  <td className="px-6 py-4">Clean Water</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Mary Smith</td>
                  <td className="px-6 py-4">$200</td>
                  <td className="px-6 py-4">2025-09-12</td>
                  <td className="px-6 py-4">Education Fund</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Ali Khan</td>
                  <td className="px-6 py-4">$750</td>
                  <td className="px-6 py-4">2025-09-13</td>
                  <td className="px-6 py-4">Health Initiative</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
