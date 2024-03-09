import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Navbar py-4 fixed-top ">
      <div className="container ">
        <div className="row m-0">
          <div className="col-4 ">
            <div className="fs-2 fw-bolder text-light  text-uppercase">
              Portmann
            </div>
          </div>
          <div className="col-8 justify-content-end  align-self-center">
            <div className="d-flex justify-content-end">
              <Link
                className="fs-5  fw-normal   fw-light  text-white px-3 mx-1 py-2"
                to="/home"
              >
                Home
              </Link>{" "}
              <Link
                className="fs-5  fw-normal   fw-light  text-white px-3 mx-1 py-2"
                to="/portfolio"
              >
                Portfolio
              </Link>
              <Link
                className="fs-5  fw-normal  text-white px-3 mx-1 py-2"
                to="/about"
              >
                About
              </Link>
              <div className="fs-5 fw-normal text-white px-4 ms-5 bg-gradient py-2 border border-0 mainbtn align-self-center rounded-2">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
