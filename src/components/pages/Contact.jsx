import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import React, { meeState, useState } from "react";
import { Link } from "react-router-dom";
import video1 from "../media/Untitled design (1).mp4";
function Contact() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <motion.div
      className=" vh-100"
      initial={{ opacity: 0, y: 50 }} // Initial opacity and scale
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container h-100">
        <div className="row m-0 h-100 align-items-center jmetify-content-start py-lg-0  my-lg-0 ">
          <div className="col-lg-6   col-12  text-start position-relative z-2 ">
            <div className="display-1 pb-4  text-light fw-bolder text-uppercase d-md-block d-none">
              Contact
              <span className="text-gradient display-1 fw-bolder text-uppercase">
              {" "}  me
              </span>
            </div>
            <div className="display-4 pb-4 text-start text-light fw-bolder text-uppercase d-md-none d-block">
              Contact  {" "}
              <span className="text-gradient display-3 fw-bolder text-uppercase">
                {" "}
                Me
              </span>
            </div>
            <p className="fs-5 text-light d-md-block d-none">
              i'd love to help you out with any queries or service-related
              information at the earliest. 
            </p>
            <p className="text-start text-light small d-md-none d-block">
              i'd love to help you out with any queries or service-related
              information at the earliest.
            </p>
           
            <div className="fs-4 text-gradient mt-2 mb-2 d-md-block d-none">
              <i
                class="fa fa-envelope text-gradient pe-3"
                aria-hidden="true"
              ></i>
              remi.portmann2002@gmail.com
            </div>{" "}
            <div className="fs-6 text-gradient  small mt-1 d-md-none d-block">
              <i
                class="fa fa-envelope text-gradient pe-2"
                aria-hidden="true"
              ></i>
              remi.portmann2002@gmail.com
            </div>
          
            <div className="fs-4 text-gradient mt-3  d-md-block d-none">
              <i class="fa fa-phone  text-gradient pe-3" aria-hidden="true"></i>
              06 17 58 73 73
            </div>{" "}
            <div className="fs-6 small text-gradient mt-1  d-md-none d-block">
              <i class="fa fa-phone  text-gradient pe-2" aria-hidden="true"></i>
              06 17 58 73 73
            </div>
          </div>
          <motion.div
            className="col-6   d-lg-block d-none align-self-center position-relative z-0"
            initial={{ opacity: 0, x: 50 }} // Initial opacity and scale
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
          >
            <video
              src={video1}
              loop={true}
              muted
              autoPlay={true}
              className="img-fluid"
            ></video>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
