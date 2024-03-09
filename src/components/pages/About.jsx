import React from "react";
import video1 from "../media/Untitled design (1).mp4";
import video2 from "../media/interne spiral.mov";
import Spline from "@splinetool/react-spline";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import portfoliodata from "../data/portfoliodata";
import { Link } from "react-router-dom";
import { easeIn, motion, useScroll } from "framer-motion";
function About() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <>
      <motion.div
        className=" vh-100"
        initial={{ opacity: 0, y: 50 }} // Initial opacity and scale
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container h-100">
          <div className="row m-0 h-100 align-items-center justify-content-center ">
            <div className="col-8  text-center position-relative z-2">
              <div className="display-1 pb-4 text-light fw-bolder text-uppercase">
                Entered the
                <span className="text-gradient display-1 fw-bolder text-uppercase">
                  {" "}
                  Spiral
                </span>
              </div>
              <p className="fs-5 text-light">
                Welcome to a world where unusual doors of creativity open to
                you. Immerse yourself in a world where different techniques are
                combined, such as digital and handmade. Delve deeper into the
                sculptor's realm with materials as varied as plaster and clay,
                where every stroke and visual brings your imagination to life.
              </p>
              <a className="btn" href="#section2">
                <i
                  class="fa fa-arrow-circle-down text-gradient display-3 mt-lg-5"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
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
              className="position-absolute z-0 img-fluid w-50 mx-auto"
              style={{
                left: "-25%",
                top: 0,
              }}
            />
          </div>
        </div>
      </motion.div>
      <div className=" vh-100" id="section2">
        <div className="container h-100">
          <div className="row m-0 h-100 align-items-center justify-content-center ">
            <motion.div
              className="col-6 h-75  "
              initial={{ opacity: 0, scaleX: 1.5 }} // Initial opacity and scale
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Spline scene="https://prod.spline.design/5kbrU-TDRs1VM3ko/scene.splinecode" />
            </motion.div>{" "}
            <motion.div
              className="col-6 ps-5"
              initial={{ opacity: 0, x: 50 }} // Initial opacity and scale
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="display-5 pb-4 text-light fw-bolder text-uppercase">
                <span className="text-gradient display-3 fw-bolder text-uppercase">
                  {" "}
                  Edward Adventure
                </span>
              </div>
              <p className="fs-5 text-light">
                I created a webseries in a post-apocaliptic world where such as
                a boook where you are the hero the community can vote for the
                next episode
              </p>
              <div className="btn btn-lg mt-2 bg-gradient rounded-1 border-0 btn-primary">
                Visit Now
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div className=" vh-100" id="section3">
        <div className=" h-100">
          <div className="row m-0 h-100 align-items-center justify-content-center ">
            <motion.div
              className="col-12 text-center"
              initial={{ opacity: 0, x: 50 }} // Initial opacity and scale
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="display-5 pb-4 text-light fw-bolder text-uppercase">
                <span className="text-gradient display-3 fw-bolder text-uppercase">
                  {" "}
                  My Portfolio
                </span>
              </div>
              <p className="fs-5 text-light">
                Here is a selection of my works, exhibited in my studio.
              </p>
              <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"4"}
                loop={true}
                className="mySwiper py-5 mb-3"
              >
                {portfoliodata.map((i) => {
                  return (
                    <SwiperSlide>
                      <img
                        src={i.image}
                        className="img-fluid"
                        style={{ height: "40vh" }}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Link
                className="btn btn-lg  bg-gradient rounded-1 border-0 btn-primary"
                to="/portfolio"
              >
                See More
              </Link>{" "}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
