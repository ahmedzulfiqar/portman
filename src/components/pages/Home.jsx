import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div
          className="row m-0 align-items-center justify-content-between"
          style={{ minHeight: "95vh", height: "95vh" }}
        >
          <motion.div
            className="col-lg-6 col-12 px-lg-3 px-0"
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
              Welcome to a world where creativity knows no bounds. Dive into the
              realm of digital drawing technique alongside timeless classics
              like painting, charcoal, pencil, and watercolor. Delve deeper into
              the sculptor's realm with materials as varied as plaster band and
              clay, where every stroke and molding breathe life into your
              imagination.
            </div>
            <div className="fs-6 py-3 text-light opacity-75 d-lg-none d-block small">
              Welcome to a world where creativity knows no bounds. Dive into the
              realm of digital drawing technique alongside timeless classics
              like painting, charcoal, pencil, and watercolor. Delve deeper into
              the sculptor's realm with materials as varied as plaster band and
              clay, where every stroke and molding breathe life into your
              imagination.
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
            <Spline scene="https://prod.spline.design/5kbrU-TDRs1VM3ko/scene.splinecode" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
//https://webhooks.hostinger.com/deploy/d9485764cff7ef4aa1e51ba194a39b3c
//https://github.com/ahmedzulfiqar/myroshan/settings/hooks/new
