'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import { DateRangePicker } from '@/components/ui/DateRangePicker';
import { FaDonate, FaProjectDiagram, FaUsers } from 'react-icons/fa';

const COLORS = ['#1E40AF', '#10B981', '#FBBF24'];

const kpiData = [
  { icon: <FaDonate size={24} />, label: 'Total Donations', value: 'UGX 125,000' },
  { icon: <FaProjectDiagram size={24} />, label: 'Active Projects', value: '12' },
  { icon: <FaUsers size={24} />, label: 'Volunteers', value: '45' },
];

const donationsTrend = [
  { date: '2025-09-01', amount: 20000 },
  { date: '2025-09-05', amount: 50000 },
  { date: '2025-09-10', amount: 35000 },
  { date: '2025-09-15', amount: 42000 },
  { date: '2025-09-20', amount: 47000 },
];

const categoryData = [
  { name: 'Technology', value: 40000 },
  { name: 'Furniture', value: 35000 },
  { name: 'Office Supplies', value: 30000 },
];

const projectData = [
  { name: 'Clean Water', value: 35000 },
  { name: 'Education Fund', value: 30000 },
  { name: 'Health Initiative', value: 25000 },
];

const recentDonations = [
  { donor: 'John Doe', amount: '$500', date: '2025-09-10', project: 'Clean Water' },
  { donor: 'Mary Smith', amount: '$200', date: '2025-09-12', project: 'Education Fund' },
  { donor: 'Ali Khan', amount: '$750', date: '2025-09-13', project: 'Health Initiative' },
];

export default function AdminDashboard() {
  const router = useRouter();
  const { setUserRole } = useAuth();
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUserRole(null);
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gha-dark/80 via-gha-dark to-gha-dark/90 backdrop-blur-sm text-gha-white p-6 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 border-b border-gha-gray pb-4">
        <h1 className="text-2xl font-bold text-gha-orange">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <DateRangePicker
            dateRange={dateRange}
            setDateRange={setDateRange}
            className="bg-gha-dark/70 backdrop-blur-sm rounded px-4 py-2"
          />
          <button
            onClick={handleLogout}
            className="bg-gha-orange px-4 py-2 rounded hover:bg-orange-700 transition focus:ring-4 focus:ring-orange-400"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex space-x-6 flex-col md:flex-row mb-8">
        {/* KPI Sidebar */}
        <aside className="w-full md:w-72 space-y-6 mb-6 md:mb-0">
          {kpiData.map(({ icon, label, value }) => (
            <Card
              key={label}
              className="bg-gha-dark/40 backdrop-blur-md border border-gha-orange shadow-lg flex items-center p-4 space-x-4 hover:shadow-gha-orange transition"
              role="region"
              aria-label={label}
            >
              <div className="text-gha-orange">{icon}</div>
              <div>
                <p className="text-sm font-semibold opacity-80">{label}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            </Card>
          ))}
        </aside>

        {/* Analytics Section */}
        <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Donations Over Time */}
          <Card
            className="bg-gha-dark/40 backdrop-blur-md border border-gha-orange shadow-lg"
            aria-label="Donation trends over time"
          >
            <CardHeader>
              <CardTitle className="text-gha-orange font-semibold">Donations Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={donationsTrend} margin={{ top: 20, right: 30, bottom: 0, left: 0 }}>
                  <XAxis dataKey="date" stroke="#FFA500" />
                  <YAxis stroke="#FFA500" />
                  <Tooltip />
                  <Line type="monotone" dataKey="amount" stroke="#FFA500" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Donations by Category */}
          <Card
            className="bg-gha-dark/40 backdrop-blur-md border border-gha-orange shadow-lg flex flex-col items-center"
            aria-label="Donations by category pie chart"
          >
            <CardHeader>
              <CardTitle className="text-gha-orange font-semibold">Donations by Category</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <PieChart width={200} height={200}>
                <Pie data={categoryData} dataKey="value" nameKey="name" outerRadius={80} label>
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>

          {/* Donations by Project */}
          <Card
            className="bg-gha-dark/40 backdrop-blur-md border border-gha-orange shadow-lg"
            aria-label="Donations by project bar chart"
          >
            <CardHeader>
              <CardTitle className="text-gha-orange font-semibold">Donations by Project</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={projectData}>
                  <XAxis dataKey="name" stroke="#FFA500" />
                  <YAxis stroke="#FFA500" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#FFA500" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Placeholder for future charts */}
          <Card className="bg-gha-dark/40 backdrop-blur-md border border-gha-orange shadow-lg flex items-center justify-center text-gha-orange opacity-50">
            <p>Coming Soon: Regional Treemap & Donor Analytics</p>
          </Card>
        </main>
      </div>

      {/* Recent Donations Table */}
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
              {recentDonations.map(({ donor, amount, date, project }) => (
                <tr key={`${donor}-${date}`}>
                  <td className="px-6 py-4">{donor}</td>
                  <td className="px-6 py-4">{amount}</td>
                  <td className="px-6 py-4">{date}</td>
                  <td className="px-6 py-4">{project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
