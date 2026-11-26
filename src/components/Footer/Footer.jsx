import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="w-full bg-[#0d2342] text-white">
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8 lg:px-0 py-12 sm:py-14 lg:py-[56px]">
        <div className="space-y-4">
          <p className="text-[12px] font-bold uppercase tracking-[2px] text-[#e5a000]">
            {t("slogan")}
          </p>

          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            {t("title")}
          </h2>

          <p className="max-w-full text-sm leading-7 text-[#d5deeb] sm:text-base">
            {t("text1")}
          </p>

          <p className="text-sm leading-7 text-[#d5deeb] sm:text-base">
            {t("text2")}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#091c35]">
        <div className="mx-auto flex max-w-[1160px] flex-col items-start justify-between gap-3 px-5 py-5 text-xs text-[#c5cfdd] sm:flex-row sm:items-center sm:px-8 lg:px-0">
          <p>{t("copyright")}</p>

          <p className="uppercase">{t("footTitle")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
