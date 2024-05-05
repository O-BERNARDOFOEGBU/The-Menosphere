import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Navbar Logo" />
          <h4>MERNosphere</h4>
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/profile">Bernard Ofoegbu</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="Logout">Logout</Link>
          </li>
          <button className="nav__toggle-btn">
            <AiOutlineClose />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
