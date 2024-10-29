import { NavLink, Outlet } from "@remix-run/react";
import { className as navLinkClassName } from "~/components/nav";
import ScrollText from "~/components/scroll-text";

export default function Terms() {
  return (
    <div className="col-span-6 leading-7">
      <nav className="pb-[84px]">
        <ul>
          <li>
            <NavLink to="/platform-terms" className={navLinkClassName}>
              <ScrollText hoverable>Terms of Service</ScrollText>
            </NavLink>
          </li>
          <li>
            <NavLink to="/platform-privacy" className={navLinkClassName}>
              <ScrollText hoverable>Privacy & Cookies Policy</ScrollText>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
