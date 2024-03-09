import React from "react";

function Footer() {
  return (
    <div className="Navbar py-4 fixed-bottom ">
      <div className="container ">
        <div className="row m-0">
          <div className="col-4 ">
            <div className="fs-2 fw-bolder text-gradient  text-uppercase">
              Portmann
            </div>
          </div>
          <div className="col-8 justify-content-end  align-self-center">
            <div className="d-flex justify-content-end">
              <div className="fs-3 text-gradient  fw-normal   fw-light px-3 mx-1 py-2">
                <i class="fa-brands fa-instagram" aria-hidden="true"></i>
              </div>
              <div className="fs-3 text-gradient  fw-normal   px-3 mx-1 py-2">
                <i class="fa-brands fa-facebook" aria-hidden="true"></i>
              </div>
              <div className="fs-3 text-gradient  fw-normal  px-3 mx-1 py-2">
                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
