import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import globalStylesUrl from "./styles/global.scss?url";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/fonts/Rosca.woff",
    as: "font",
    type: "font/woff",
    crossOrigin: "anonymous"
  },
  {
    rel: "preload",
    href: "/fonts/Rosca-Slant.woff",
    as: "font",
    type: "font/woff",
    crossOrigin: "anonymous"
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  },
  { rel: "stylesheet", href: globalStylesUrl }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌳</text></svg>"
        />
        <title>eStump</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
