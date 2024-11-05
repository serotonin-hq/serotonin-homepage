import { Outlet } from "@remix-run/react";
import { useEffect, useState } from "react";
import Nav from "~/components/nav";
import Particles from "~/components/particles";

export default function WithNav() {
  const [isHydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
      {isHydrated && <Particles />}
    </>
  );
}
