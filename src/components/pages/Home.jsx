import React, { useState } from "react";
import video1 from "../media/Untitled design (1).mp4";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <div className="Home">
      <div className="container">
        <div
          className="row m-0 align-items-center justify-content-between"
          style={{ minHeight: "95vh", height: "95vh" }}
        >
          {" "}
          <motion.video
            onLoadedData={() => setIsVideoLoaded(true)}
            src={video1}
            loop={true}
            autoPlay={true}
            muted={true}
            initial={{ opacity: 0, x: -100 }}
            animate={
              isVideoLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
            className="position-absolute z-3 blr img-fluid w-50 mx-auto d-md-none d-block"
            style={{
              left: "25%",
              top: "5%",
            }}
          />
          <motion.div
            className="col-lg-6 col-12 px-lg-3 px-0 position-relative z-2"
            initial={{ opacity: 0, x: -100 }} // Initial opacity and scale
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <div className="display-2 text-start text-light fw-bolder">
              Discover The Art Of{" "}
              <span className="text-gradient fw-bolder text-uppercase">
                {" "}
                Expression
              </span>
            </div>
            <div className="fs-5 py-4 text-light opacity-75 d-lg-block d-none">
              Immerse yourself in the realm of the artist, an animator,
              sculptor, visual artist and 3D generalist. Discover original
              stories with unique designs made from various materials like latex
              or modeling clay.
            </div>
            <div className="fs-6 py-3 text-light opacity-75 d-lg-none d-block small">
              Immerse yourself in the realm of the artist, an animator,
              sculptor, visual artist and 3D generalist. Discover original
              stories with unique designs made from various materials like latex
              or modeling clay.
            </div>
            <Link
              className="btn btn-lg mt-1 bg-gradient rounded-1 border-0 btn-primary"
              to="/portfolio"
            >
              Explore Now
            </Link>
          </motion.div>
          <motion.div
            className="col-6 overflow-visible h-100 d-lg-block d-none "
            initial={{ opacity: 0, x: 50 }} // Initial opacity and scale
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
          >
            {" "}
            <Spline scene="https://prod.spline.design/ecreZkeRgaYrxQJh/scene.splinecode" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
//https://webhooks.hostinger.com/deploy/d9485764cff7ef4aa1e51ba194a39b3c
//https://github.com/ahmedzulfiqar/myroshan/settings/hooks/new
