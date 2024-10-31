import { Outlet } from "@remix-run/react";
import { lazy, Suspense, useEffect, useState } from "react";
import Nav from "~/components/nav";

const Particles = lazy(() => import("~/components/particles"));

export default function WithNav() {
  const [isHydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
      {isHydrated && (
        <Suspense>
          <Particles />
        </Suspense>
      )}
    </>
  );
}
