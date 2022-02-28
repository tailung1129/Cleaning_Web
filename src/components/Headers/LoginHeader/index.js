import { Link } from "react-router-dom";

import "./LoginHeader.css"

const LoginHeader = () => {
  return (
    <div>
      <div className="background-color-2">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 ">
            <Link
              to="/"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none ps-100 display-6"
            >
              <img width="150" src="/img/Compareit-removebg-preview.png" />
            </Link>
        </header>
      </div>
    </div>
  );
};

export default LoginHeader;
