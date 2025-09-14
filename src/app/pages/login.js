export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gha-dark">
      <div className="w-full max-w-3xl flex shadow-lg rounded-lg overflow-hidden bg-gha-dark">
        {/* Left Side: Logo and Project Name */}
        <div className="w-1/2 flex flex-col items-center justify-center py-10 px-6 border-r border-gha-gray">
          {/* Placeholder logo shape */}
          <div className="mb-6">
            <svg width="48" height="48" viewBox="0 0 48 48" aria-label="Logo" role="img">
              <path d="M24 4C16 12 12 22 24 44C36 22 32 12 24 4Z" fill="#ef6c19"/>
              <path d="M24 4C20 8 16 16 24 24C32 16 28 8 24 4Z" fill="#22a6a7"/>
            </svg>
          </div>
          <h1 className="text-gha-white text-2xl font-semibold text-center tracking-wide">
            Giving Hands Alliance
          </h1>
          <span className="text-gha-gray mt-1 text-base text-center">Charity Management System</span>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-1/2 flex items-center justify-center py-10 px-6">
          <form className="w-full max-w-sm space-y-8">
            <h2 className="text-gha-white text-xl font-medium mb-1">Welcome</h2>
            <p className="text-gha-gray text-sm mb-6 uppercase">Please login to admin dashboard.</p>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full py-2 px-3 mb-4 rounded bg-gha-white text-gha-dark border border-gha-gray focus:outline-none focus:ring-2 focus:ring-gha-orange"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 px-3 mb-4 rounded bg-gha-white text-gha-dark border border-gha-gray focus:outline-none focus:ring-2 focus:ring-gha-orange"
              />
            </div>
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
