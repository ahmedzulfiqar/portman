import React, { useState } from "react";
import portfoliodata from "../data/portfoliodata";
import Card from "../atoms/Card";
import video1 from "../media/Untitled design (1).mp4";
import { motion } from "framer-motion";
function Portfolio() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <div className="Home">
      <div className="container my-5 py-5 position-relative z-2">
        <div className="row m-0 align-items-center justify-content-center my-5 py-5">
          <div className="col-8  text-center">
            <div className="display-2 text-light fw-bolder">
              Explore My Artistic
              <span className="text-gradient text-uppercase fw-bolder">
                {" "}
                Portfolio
              </span>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-6 m-0">
            {portfoliodata.slice(0, portfoliodata.length / 2).map((i) => {
              return <Card i={i} direction={false} />;
            })}
          </div>
          <div className="col-6 m-0">
            {portfoliodata.slice(portfoliodata.length / 2).map((i) => {
              return <Card i={i} direction={true} />;
            })}
          </div>
        </div>
      </div>{" "}
      <motion.video
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
      />{" "}
  
    </div>
  );
}

export default Portfolio;
