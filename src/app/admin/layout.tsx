export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include a shared UI here e.g. a header or sidebar */}
      <nav>Admin Nav</nav>
      {children}
    </section>
  );
}
