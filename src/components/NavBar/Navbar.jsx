import CartWidget from "./CartWidget";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-left collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/category/consola">
                Consolas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/keyboard">
                Teclados
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/mouse">
                Mouse
              </Link>
            </li>
          </ul>
        </div>

        <Link className="Brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <span className="navbar-text">
          <CartWidget />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
