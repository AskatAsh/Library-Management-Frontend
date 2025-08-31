import { navlinks } from "@/lib/constants";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <ul className="hidden items-center gap-8 font-medium md:flex">
      {navlinks.map((navlink) => (
        <li key={navlink.id}>
          <NavLink
            to={navlink.link}
            className={({ isActive }) =>
              `${isActive ? "underline underline-offset-2" : ""}`
            }
          >
            {navlink.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
