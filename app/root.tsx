import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { cn } from "~/utils/cn";
import { baseMeta } from "~/utils/meta";
import { atomWithStorage } from "jotai/utils";
import { useAtomValue } from "jotai";
import { memo } from "react";

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
    // GT America Mono
    {
      rel: "preload",
      href: "/fonts/GT-America/GT-America-Mono-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/GT-America/GT-America-Mono-Bold.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },

    // GT America Standard
    {
      rel: "preload",
      href: "/fonts/GT-America/GT-America-Standard-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/GT-America/GT-America-Standard-Bold.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/GT-America/GT-America-Standard-Medium.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ];
};

export const darkModeAtom = atomWithStorage("darkMode", true);

export function Layout({ children }: { children: React.ReactNode }) {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <html
      lang="en"
      className={cn(
        darkMode && "dark",
        "antialiased transition-[filter] duration-500"
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
        <TwitterPixel />
      </body>
    </html>
  );
}

const TwitterPixel = memo(function Pixel() {
  const __html = `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','o8dec');`;

  return <script dangerouslySetInnerHTML={{ __html }} />;
});

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <div></div>;
}
