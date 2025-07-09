import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
      <div className="container-fluid">
        <span className="navbar-brand">Dev's library</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <nav className="navbar-toggler-icon"></nav>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Rechercher
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item m-1">
              <a type="button" className="btn btn-outline-light" href="#">
                S'inscrire
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
