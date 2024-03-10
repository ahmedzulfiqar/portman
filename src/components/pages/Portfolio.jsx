import React, { useEffect, useState } from "react";
import portfoliodata from "../data/portfoliodata";
import Card from "../atoms/Card";
import video1 from "../media/Untitled design (1).mp4";
import { motion, useScroll } from "framer-motion";
function Portfolio() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="Home">
      <div className="container my-5 py-5 position-relative z-2">
        <div className="row m-0 align-items-center justify-content-center my-lg-5 py-lg-5 ">
          <motion.div
            className="col-lg-8 col-12  text-center  position-relative z-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="display-2 text-light fw-bolder d-md-block d-none">
              Explore My Artistic
              <span className="text-gradient text-uppercase fw-bolder">
                {" "}
                Portfolio
              </span>
            </div>{" "}
            <div className="display-6 pb-3 text-light fw-bolder d-md-none d-block">
              Explore My Artistic
              <span className="text-gradient text-uppercase fw-bolder">
                {" "}
                Portfolio
              </span>
            </div>
          </motion.div>{" "}
          <motion.video
            onLoadedData={() => setIsVideoLoaded(true)}
            src={video1}
            loop={true}
            autoPlay={true}
            muted={true}
            initial={{ opacity: 0, x: -100 }}
            animate={
              isVideoLoaded ? { opacity: 1, x: -20 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: false }}
            className="position-absolute z-0 img-fluid w-50 mx-auto"
            style={{
              left: "-25%",
              top: 0,
            }}
          />
          <motion.video
            onLoadedData={() => setIsVideoLoaded(true)}
            src={video1}
            loop={true}
            autoPlay={true}
            muted={true}
            initial={{ opacity: 0, x: -100 }}
            animate={
              isVideoLoaded ? { opacity: 1, x: -20 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: false }}
            className="position-absolute z-0 d-md-block d-none img-fluid w-50 mx-auto"
            style={{
              right: "-20%",
              bottom: "50%",
            }}
          />
          <motion.video
            onLoadedData={() => setIsVideoLoaded(true)}
            src={video1}
            loop={true}
            autoPlay={true}
            muted={true}
            initial={{ opacity: 0, x: -100 }}
            animate={
              isVideoLoaded ? { opacity: 1, x: -20 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: false }}
            className="position-absolute z-0 img-fluid w-50 mx-auto"
            style={{
              left: "-25%",
              bottom: 0,
            }}
          />
        </div>
        <div className="row m-0">
          <div className="col-md-6 col-12 m-0">
            {portfoliodata.slice(0, portfoliodata.length / 2).map((i) => {
              return <Card i={i} direction={false} />;
            })}
          </div>
          <div className="col-md-6 col-12 m-0">
            {portfoliodata.slice(portfoliodata.length / 2).map((i) => {
              return <Card i={i} direction={false} />;
            })}
          </div>
        </div>
      </div>{" "}
      {/*  <motion.video
        onLoadedData={() => setIsVideoLoaded(true)}
        src={video1}
        loop={true}
        autoPlay={true}
        muted={true}
        initial={{ opacity: 0, x: -100 }}
        animate={isVideoLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 2, delay: 0.3 }}
        viewport={{ once: true }}
        className="position-fixed z-0 img-fluid w-25 mx-auto"
        style={{
          left: "0%",
          top: "4%",
        }}
      />*/}{" "}
    </div>
  );
}

export default Portfolio;
