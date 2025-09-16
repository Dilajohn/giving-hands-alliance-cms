This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting started today

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Project Overview
This is a Next.js application using the App Router structure, styled with Tailwind CSS. It implements a simple authentication flow (login, logout, JWT-based session), a protected admin dashboard, and middleware for route protection.

file structure
src/
  app/
    api/
      auth/
        login.js        # API route for login (JWT authentication)
        logout.js       # API route for logout (clears cookies)
        refresh.js      # API route for refreshing JWT
    dashboard/
      page.js           # Admin dashboard page (protected)
    login/
      page.js           # Login page (public)
    middleware.js       # Middleware for route protection
    layout.tsx          # Root layout for all pages
    page.tsx            # Root page (redirects to login)
  tailwind.config.js    # Tailwind CSS configuration
README.md               # Project documentation