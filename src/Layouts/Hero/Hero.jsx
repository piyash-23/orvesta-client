import React from "react";
import logo from "../../../public/logo.jpeg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <>
      <div className="hero min-h-[80vh] bg-[#F2F6FB]">
        <div className="hero-content flex-col lg:flex-row gap-5 justify-center">
          <div className="flex-1">
            <p className="text-[#b68a32] text-sm font-bold">
              <span>{t("slogan")}</span>
            </p>
            <h1 className="text-5xl font-bold text-[#0b2343] text-[90px]">
              {t("headTitle")}
            </h1>
            <p className="py-6">{t("headText")}</p>
            <button className="btn text-white bg-[#0b2343] ">
              {t("heroBtn")}
            </button>
          </div>
          <div className="hidden lg:block flex-1">
            <Image src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
