import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "./HomeMenu.css"

const HomeMenu = () => {
  return (
    <Nav className="background-color-1 px-90px py-1">
      <Link to="/" className="nav-link px-3 link-light">
        Cleaning
      </Link>
      <Link to="/" className="nav-link px-3 link-light">
        Relocation
      </Link>
      <Link to="/" className="nav-link px-3 link-light">
        Furniture fix
      </Link>
      <Link to="/" className="nav-link px-3 link-light">
        Moving out trashes
      </Link>
      <Link to="/" className="nav-link px-3 link-light">
        Painting (houses)
      </Link>
      <Link to="/" className="nav-link px-3 link-light">
        Carpentry
      </Link>
    </Nav>      
  );
};

export default HomeMenu;
