import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { navlinks } from "@/lib/constants";
import { Menu } from "lucide-react";
import { NavLink } from "react-router";

const MobileNavbar = () => {
  return (
    <div className="md:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="p-2">
            <Menu size={24} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-0" align="end">
          <ul className="flex flex-col space-y-2 p-2">
            {navlinks.map((navlink) => (
              <li key={navlink.id}>
                <NavLink
                  to={navlink.link}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded hover:bg-gray-100 ${
                      isActive
                        ? "underline underline-offset-2 font-semibold"
                        : ""
                    }`
                  }
                >
                  {navlink.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MobileNavbar;
