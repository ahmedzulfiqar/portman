import { animate, motion, stagger } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../media/428451987_931471568641067_2922994258616064842_n (1).png";

function Header() {
  const [open, setopen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -300 },
  };
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate(
      ".item",
      open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
      {
        duration: 0.2,
        delay: open ? staggerMenuItems : 0,
      }
    );
  }, [open]);
  return (
    <motion.div
      className="Navbar py-4 fixed-top "
      initial={{ opacity: 0, y: -50 }} // Initial opacity and scale
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container ">
        <div className="row m-0">
          <div className="col-lg-4 col-6 ">
            <Link
              className="fs-2 fw-bolder text-light  text-uppercase"
              to="/home"
            >
              Portmann
            </Link>
          </div>
          <div className="col-8 justify-content-end  align-self-center d-lg-block d-none">
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
              <Link className="fs-5 fw-normal text-white px-4 ms-5 bg-gradient py-2 border border-0 mainbtn align-self-center rounded-2" to={'/contact'}>
                Contact
              </Link>
            </div>
          </div>
          <div className="col-6 d-lg-none d-block d-flex justify-content-end align-self-center">
            {!open ? (
              <i
                class="fa fa-bars fs-2 text-gradient"
                aria-hidden="true"
                onClick={() => setopen(!open)}
              ></i>
            ) : (
              <i
                class="fa fa-xmark fs-2 text-gradient fa-rotate-90"
                aria-hidden="true"
                onClick={() => setopen(!open)}
              ></i>
            )}
          </div>
        </div>
      </div>
      <motion.div
        animate={open ? "open" : "closed"}
        initial={{ opacity: 0 }}
        variants={variants}
        transition={{ duration: 0.2, delay: 0 }}
        className="bg-black vh-100 pt-5 shadow border-bottom border-1 border-dark w-100 py-3 position-absolute justify-content-end  align-self-center d-lg-none d-block"
      >
        <div className="d-block container">
          <Link
            className="fs-5 item fw-normal  d-block  fw-light  text-white ps-3 mx-1 py-2"
            to="/home"
            onClick={() => setopen(false)}
          >
            Home
          </Link>{" "}
          <hr />
          <Link
            className="fs-5 item fw-normal  d-block  fw-light  text-white ps-3 mx-1 py-2"
            to="/portfolio"
            onClick={() => setopen(false)}
          >
            Portfolio
          </Link>
          <hr />
          <Link
            className="fs-5 item fw-normal   d-block  text-white ps-3 mx-1 py-2"
            to="/about"
            onClick={() => setopen(false)}
          >
            About
          </Link>
          <hr />
          <Link
            className="fs-5 item fw-normal   d-block  text-white ps-3 mx-1 py-2"
            to="/contact"
            onClick={() => setopen(false)}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
