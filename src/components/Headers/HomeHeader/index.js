import { Link } from "react-router-dom"
import { Nav , Row , Col } from "react-bootstrap"
import { FaRegUserCircle } from "react-icons/fa"

const HomeHeader = () => {
  return (
    <Row className="background-color-1 px-90px py-2">
      <Col md={2}>
        <Link to="/" className="text-white text-decoration-none display-6" > <img width="250" height="50" src="/img/Compareit-removebg-preview.png" /></Link>
      </Col>
      <Col md={{span:5 , offset:5}}>
        <Nav>
          <Link to="/about" className="nav-link px-2 link-light">
            For Clients
          </Link>
          <Link to="/registercompany" className="nav-link px-2 link-light">
            For Companies
          </Link>
          <Link to="/about" className="nav-link px-2 link-light">
            Contact
          </Link>
          <Link to="/about" className="nav-link px-2 link-light">
            Support
          </Link>
          <Link to="/login" className="nav-link px-2 link-light">
            Log in <FaRegUserCircle />
          </Link>
        </Nav>
      </Col>
    </Row>
  );
};

export default HomeHeader;
