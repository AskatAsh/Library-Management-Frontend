import { Link } from "react-router";
import { Navbar } from ".";
import Container from "../Container/Container";
import { ModeToggle } from "../ModeToggle/mode-toggle";

const Header = () => {
  return (
    <header className="flex-center">
      {/* inner container */}
      <Container className="flex items-center justify-between py-5">
        {/* logo */}
        <Link to="/" className="text-lg font-semibold text-primary">
          <span>ToDo</span>
        </Link>

        {/* navlinks */}
        <Navbar />

        {/* theme toggler */}
        <ModeToggle />
      </Container>
    </header>
  );
};

export default Header;
