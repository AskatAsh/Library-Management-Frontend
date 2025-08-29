import { Link } from "react-router";
import { Navbar } from ".";
import { ModeToggle } from "../ModeToggle/mode-toggle";

const Header = () => {
  return (
    <header className="flex-center">
      {/* inner container */}
      <div className="container p-4 flex items-center justify-between">
        {/* logo */}
        <Link to="/" className="text-lg font-semibold text-primary">
          <span>ToDo</span>
        </Link>

        {/* navlinks */}
        <Navbar />

        {/* theme toggler */}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
