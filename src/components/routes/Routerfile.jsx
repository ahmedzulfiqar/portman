import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import image1 from "../media/428451987_931471568641067_2922994258616064842_n (1).png";
function Routerfile() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="row m-0">
        <div className="col-12 p-0">
          <Header />
          <div className="marginset">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
         
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Routerfile;
