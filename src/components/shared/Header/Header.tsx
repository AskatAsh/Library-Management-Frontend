import logo from "@/assets/logo.png";
import { Link } from "react-router";
import { Navbar } from ".";
import Container from "../Container/Container";
import { ModeToggle } from "../ModeToggle/mode-toggle";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="flex-center">
      {/* inner container */}
      <Container className="flex items-center justify-between py-5">
        {/* logo */}
        <Link
          to="/"
          className="text-lg font-semibold text-primary flex items-center"
        >
          <img className="w-10" src={logo} alt="Library management app logo" />
          <span className="text-nowrap">BOOKs</span>
        </Link>

        {/* navlinks */}
        <Navbar />

        <div className="flex items-center gap-3">
          {/* theme toggler */}
          <ModeToggle />
          {/* Mobile nav */}
          <MobileNavbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
