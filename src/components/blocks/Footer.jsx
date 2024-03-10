import React from "react";
import { motion } from "framer-motion";
function Footer() {
  return (
    <motion.div
      className="Navbar py-4 fixed-bottom "
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container ">
        <div className="row m-0">
          <div className="col-4 d-md-block d-none">
            <div className="fs-2 fw-bolder text-gradient  text-uppercase">
              Portmann
            </div>
          </div>
          <div className="col-md-8 col-12 justify-content-md-end justify-content-center align-self-center">
            <div className="d-flex justify-content-md-end justify-content-center">
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
    </motion.div>
  );
}

export default Footer;
