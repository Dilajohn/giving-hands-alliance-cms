'use client';
import Link from 'next/link';

type SidebarProps = {
  role: string | null;
};

export default function Sidebar({ role }: SidebarProps) {
  const menuItems = {
    admin: [
      { name: 'Dashboard', href: '/admin' },
      { name: 'Users', href: '/admin/users' },
      { name: 'Reports', href: '/admin/reports' },
    ],
    executive: [
      { name: 'Dashboard', href: '/executive' },
      { name: 'Reports', href: '/executive/reports' },
    ],
    donor: [{ name: 'Dashboard', href: '/donor' }],
  };

  const links = role ? menuItems[role] || [] : [];

  return (
    <nav className="w-64 border-r border-gha-gray p-4 bg-gha-dark">
      <ul>
        {links.map(({ href, name }) => (
          <li key={href} className="mb-3">
            <Link href={href}>
              <a className="text-gha-white hover:text-gha-orange transition">{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

