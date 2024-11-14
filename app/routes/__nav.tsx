import { Outlet } from "@remix-run/react";
import Nav from "~/components/nav";
import Particles from "~/components/particles";

export default function WithNav() {
  return (
    <>
      <Nav />
      <Outlet />
      <Particles />
    </>
  );
}
