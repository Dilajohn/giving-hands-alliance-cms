export default function AdminDashboard() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gha-dark p-6 rounded border border-gha-gray shadow">
          <h2 className="text-lg font-semibold">Total Donations</h2>
          <p className="text-2xl font-bold">$125,000</p>
        </div>
        <div className="bg-gha-dark p-6 rounded border border-gha-gray shadow">
          <h2 className="text-lg font-semibold">Active Projects</h2>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-gha-dark p-6 rounded border border-gha-gray shadow">
          <h2 className="text-lg font-semibold">Volunteers</h2>
          <p className="text-2xl font-bold">45</p>
        </div>
      </div>
    </>
  );
}
