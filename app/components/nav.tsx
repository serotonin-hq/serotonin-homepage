import { NavLink, NavLinkProps, useLocation } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import BlankArrow from "~/components/blank-arrow";
import Logo from "~/components/logo";
import ScrollText from "~/components/scroll-text";
import SocialNav from "~/components/social-nav";
import { cn } from "~/utils/cn";

const baseClassName = "relative uppercase hover:pl-4 leading-7";

const className: NavLinkProps["className"] = ({ isActive }) =>
  cn(
    baseClassName,
    isActive
      ? "inline-block font-bold pl-4 before:absolute before:text-xs before:pt-1 before:left-0 before:content-['•']"
      : ""
  );

export default function Nav() {
  const location = useLocation();
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    setIsFull(location.pathname !== "/");
  }, [location.pathname]);

  const handleDarkMode = useCallback(() => {
    if (location.pathname !== "/") return;
    const colorMode = localStorage.getItem("color-mode") ?? "dark";
    localStorage.setItem("color-mode", colorMode === "dark" ? "light" : "dark");
  }, [location.pathname]);

  return (
    <>
      <header className="flex items-start justify-between fixed md:left-auto left-8 right-8 top-8 z-10">
        <NavLink className="md:hidden" to="/">
          <Logo
            onClick={handleDarkMode}
            className="animate-[spin_16s_linear_infinite] [animation-direction:reverse]"
          />
        </NavLink>
        <nav>
          <ul className="flex flex-col items-end">
            <li>
              <NavLink
                className="uppercase leading-7"
                target="__blank"
                to="https://yqvw3klbar7.typeform.com/to/oER9bmB0?typeform-source=www.serotonin.co"
              >
                <ScrollText hoverable>Contact</ScrollText>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={cn(
                  "uppercase leading-7 transition-opacity",
                  location.pathname === "/" ? "opacity-100" : "opacity-30"
                )}
                to="marketing"
              >
                <ScrollText hoverable>About</ScrollText>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="md:fixed inset-y-8 md:right-auto right-0 pl-8 flex flex-col">
        <NavLink className="md:block hidden" to="/">
          <Logo
            onClick={handleDarkMode}
            className="animate-[spin_16s_linear_infinite] [animation-direction:reverse]"
          />
        </NavLink>
        {isFull && (
          <>
            <nav className="md:pt-20 md:block grid grid-cols-2 gap-2 pt-[144px] col-span-3 md:flex-grow">
              <ul className="pb-7">
                <li>
                  <NavLink to="/marketing" className={className}>
                    <ScrollText hoverable>Marketing</ScrollText>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/strategy" className={className}>
                    <ScrollText hoverable>Strategy</ScrollText>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recruiting" className={className}>
                    <ScrollText hoverable>Recruiting</ScrollText>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/legal" className={className}>
                    <ScrollText hoverable>Legal</ScrollText>
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li className="flex items-center gap-1">
                  <NavLink
                    target="__blank"
                    to="https://platform.serotonin.co"
                    className={cn("peer", baseClassName)}
                  >
                    <ScrollText hoverable>Platform</ScrollText>
                  </NavLink>
                  <BlankArrow className="shrink-0 md:opacity-0 peer-hover:opacity-100 transition-opacity" />
                </li>
                <li>
                  <NavLink to="/products" className={className}>
                    <ScrollText hoverable>Products</ScrollText>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/clients" className={className}>
                    <ScrollText hoverable>Clients</ScrollText>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/team" className={className}>
                    <ScrollText hoverable>Team</ScrollText>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <SocialNav />
          </>
        )}
      </div>
    </>
  );
}
