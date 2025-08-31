import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import threadIcon from "@/assets/icons/thread.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import logo from "@/assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <img
              className="w-10"
              src={logo}
              alt="Library management app logo"
            />
            <span className="text-nowrap">BOOKs</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Manage books, track borrowings, and explore resources seamlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-books" className="hover:text-white transition">
                All Books
              </Link>
            </li>
            <li>
              <Link
                to="/borrowed-books"
                className="hover:text-white transition"
              >
                Borrowed Books
              </Link>
            </li>
            <li>
              <Link to="/add-new-book" className="hover:text-white transition">
                Add Book
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              to="#"
              className="hover:text-white transition bg-white/70 p-2 rounded-full"
            >
              <img className="w-8 h-8" src={facebookIcon} alt="facebook icon" />
            </Link>
            <Link
              to="#"
              className="hover:text-white transition bg-white/70 p-2 rounded-full"
            >
              <img className="w-8 h-8" src={twitterIcon} alt="twitter icon" />
            </Link>
            <Link
              to="#"
              className="hover:text-white transition bg-white/70 p-2 rounded-full"
            >
              <img
                className="w-8 h-8"
                src={instagramIcon}
                alt="instagram icon"
              />
            </Link>
            <Link
              to="#"
              className="hover:text-white transition bg-white/70 p-2 rounded-full"
            >
              <img className="w-8 h-8" src={threadIcon} alt="thread icon" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6">
        <p className="text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()} Library Management. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
