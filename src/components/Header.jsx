import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <nav className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-cyan-400">
          <a href="/">KabCode</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-lg hover:text-cyan-400 transition">
            Home
          </a>
          <a href="/problems" className="text-lg hover:text-cyan-400 transition">
            Problems
          </a>
          <a href="/about" className="text-lg hover:text-cyan-400 transition">
            About
          </a>
          <a href="/contact" className="text-lg hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-6">
          <a href="/" className="text-lg hover:text-cyan-400 transition block">
            Home
          </a>
          <a href="/problems" className="text-lg hover:text-cyan-400 transition block">
            Problems
          </a>
          <a href="/about" className="text-lg hover:text-cyan-400 transition block">
            About
          </a>
          <a href="/contact" className="text-lg hover:text-cyan-400 transition block">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
