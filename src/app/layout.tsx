import './globals.css'; // Import Tailwind base styles

export const metadata = {
  title: 'Giving Hands Alliance CMS',
  description: 'Charity Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gha-dark text-gha-white min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
