import React from "react";
import video1 from "../media/Untitled design (1).mp4";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import portfoliodata from "../data/portfoliodata";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function About() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <>
      <div className=" vh-100 " id="section2">
        <div className="container h-100">
          {" "}
          <div className="row m-0 h-100  align-items-center justify-content-center ">
            <motion.div
              className="col-lg-6 col-12 d-lg-block d-none h-75  "
              initial={{ opacity: 0, scaleX: 1.5 }} // Initial opacity and scale
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Spline scene="https://prod.spline.design/ALphKMEd51vtlgWx/scene.splinecode" />
            </motion.div>{" "}
            <motion.div
              className="col-lg-6 col-12 ps-lg-5 position-relative z-2"
              initial={{ opacity: 0, x: 50 }} // Initial opacity and scale
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
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
                className="position-relative z-3 blr img-fluid w-50 mx-auto d-md-none d-block"
              />
              <div className="display-5 pb-4 text-light fw-bolder text-uppercase">
                <span className="text-gradient position-relative  z-2 display-3 fw-bolder text-uppercase">
                  {" "}
                  Edward Adventure
                </span>
              </div>
              <p className="fs-5 position-relative z-2 text-light">
                I created an interactive post apocalyptic webserie. Realised
                from different animation technique like 3d and stop motion. You
                will be immersed in this universe next to edward, where you can
                choose your path as in a book of which you are the hero. Every
                first of the month a new episode is published.
              </p>
              <a
                className="btn btn-lg mt-2 bg-gradient rounded-1 border-0 btn-primary"
                href="
                https://www.youtube.com/playlist?list=PLNWhR_7RPhMeryyyk89qfUhyWiiDSSNs_"
              >
                Watch It
              </a>
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
                loop={true}
                className="mySwiper py-5 mb-3"
                slidesPerView={"1"}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
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
