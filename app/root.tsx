import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { lazy, Suspense, useEffect, useState } from "react";

import "./tailwind.css";
import { cn } from "~/utils/cn";
import { baseMeta } from "~/utils/meta";
import { atomWithStorage } from "jotai/utils";
import { useAtomValue } from "jotai";

const Particles = lazy(() => import("~/components/particles"));

export const meta: MetaFunction = () => {
  return baseMeta(
    "Serotonin - Bringing the World's Breakthrough Technologies to Market",
    "Serotonin is a go-to-market platform for web3, AI, and biotech. You build the future, we do the strategy, recruiting, and legal work."
  );
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ];
};

export const darkModeAtom = atomWithStorage("darkMode", true);

export function Layout({ children }: { children: React.ReactNode }) {
  const darkMode = useAtomValue(darkModeAtom);
  const [isHydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <html
      lang="en"
      className={cn(
        darkMode && "dark",
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
