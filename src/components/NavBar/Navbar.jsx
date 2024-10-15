import CartWidget from "./CartWidget"
import "./navbar.scss"
import logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <Link className="Brand" to="/">
        <img src={logo} alt="" width={80} />
      </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="findus">Find us</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <CartWidget/>
          </span>
        </div>
      </div>
    </nav>
      )
    }

export default Navbar
