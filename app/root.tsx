import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { lazy, Suspense, useEffect, useState } from "react";

import "./tailwind.css";
import Nav from "~/components/nav";
import { cn } from "~/utils/cn";

const Particles = lazy(() => import("~/components/particles"));

export const links: LinksFunction = () => [];

export const clientLoader = () => {
  return { colorMode: localStorage.getItem("color-mode") };
};

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof clientLoader>();
  const [isHydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <html
      lang="en"
      className={cn(
        data?.colorMode === "light" ? "invert" : "invert-0",
        "antialiased select-none transition-[filter] duration-500"
      )}
    >
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
