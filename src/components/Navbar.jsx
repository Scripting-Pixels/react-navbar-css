import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <header className="header">
      <div className="top-row">
        <div className="logo">LOGO</div>
        <button 
          className="menu-button" 
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a className="active" href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/pro">Go Pro</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
