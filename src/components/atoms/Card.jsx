import { motion, useScroll } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";

function Card({ i, direction }) {
  return (
    <motion.div
      className="mx-3 my-4 position-relative mcard"
      initial={!direction ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }} // Initial opacity and scale
      whileInView={direction ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: false }}
    >
      <Tilt tiltReverse={true} tiltMaxAngleX={7} tiltMaxAngleY={7}>
        {
          // <div className="card-overlayer position-absolute top-0 start-0 end-0 bottom-0 z-3 "></div>
        }
        <div className="card border-0 shadow bg-transparent">
          <img src={i.image} alt="" className=" rounded-4" />
          {/*      <div class="card-img-overlay  text-primary fs-2 fw-bolder d-flex flex-column justify-content-center align-items-center">
            View Project
  </div>*/}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default Card;
