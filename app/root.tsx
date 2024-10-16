import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { lazy, Suspense, useEffect, useState } from "react";

import "./tailwind.css";
import Nav from "~/components/nav";

const Particles = lazy(() => import("~/components/particles"));

export const links: LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isHydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  return (
    <html lang="en" className="antialiased dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        {children}
        <ScrollRestoration />
        <Scripts />
        {isHydrated && (
          <Suspense>
            <Particles />
          </Suspense>
        )}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <div></div>;
}
