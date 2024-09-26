import CartWidget from "./CartWidget"
import "./navbar.scss"
import logo from "../../assets/logo.jpg"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <div className="Brand">
        <img src={logo} alt="" width={80} />
      </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Find us</a>
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
