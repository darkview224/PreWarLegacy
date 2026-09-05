import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => setIsOpen(false);

  return (
    <main>
      <div className="navBar">
        <Link to="/" className="logo" onClick={closeNav}>Prewar Magic</Link>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
        <nav className={`navLinks ${isOpen ? "open" : ""}`}>
          <NavLink to="/" end className="navLink" onClick={closeNav}>About</NavLink>
          <NavLink to="/rules" className="navLink" onClick={closeNav}>Rules</NavLink>
          <NavLink to="/cards" className="navLink" onClick={closeNav}>Cards</NavLink>
          <NavLink to="/decks" className="navLink" onClick={closeNav}>Decks</NavLink>
          <NavLink to="/faq" className="navLink" onClick={closeNav}>FAQ</NavLink>
          <NavLink to="/contact" className="navLink" onClick={closeNav}>Contact</NavLink>
          <button>
            <a href="https://discord.gg/d94t5dS" target="_blank">
              <img src="/Discord-Logo-Black.png" style={{height: '20px', width: 'auto'}}alt="Discord" />
            </a>
          </button>
        </nav>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </main>
  );
}
