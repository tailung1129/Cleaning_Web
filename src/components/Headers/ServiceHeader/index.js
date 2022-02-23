import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {BsTelephoneFill , BsPersonFill} from "react-icons/bs"

import "./ServiceHeader.css"

const ServiceHeader = () => {
  return (
    <div>
      <div className="background-color-1 pb-70px">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 ">
            <Link
              to="/"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none ps-100 display-6"
            >
              TestCom
            </Link>
            <Nav className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 pe-5">
              <Link to="/" className="nav-link px-2 link-light">
              <BsTelephoneFill /> 044 555 55 55
              </Link>
              <Link to="/login" className="nav-link px-2 link-light">
              Log in <BsPersonFill />
              </Link>
          </Nav>   
        </header>
      </div>
    </div>
  );
};

export default ServiceHeader;
