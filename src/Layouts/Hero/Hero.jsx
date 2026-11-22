import React from "react";
import logo from "../../../public/logo.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-[80vh]">
        <div className="hero-content flex-col lg:flex-row gap-5 justify-center">
          <div>
            <p className="text-[#b68a32] text-sm font-bold">
              GLOBAL VISION • TRUSTED PARTNERSHIPS
            </p>
            <h1 className="text-5xl font-bold text-[#0b2343] text-[90px]">
              Building a Better Tomorrow
            </h1>
            <p className="py-6">
              A diversified business identity connecting Trading, Contracting,
              Manpower Supply, Investment and Consulting.
            </p>
            <button className="btn text-white bg-[#0b2343] ">
              Explore Our Business
            </button>
          </div>
          <div className="hidden lg:flex">
            <Image src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
