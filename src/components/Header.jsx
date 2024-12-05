import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { Logo } from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <header className="header">
      <Logo />
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <button 
        className="toggle-menu" 
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
    </header>
  );
};

export default Navbar;
