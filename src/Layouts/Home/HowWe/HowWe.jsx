import { useTranslations } from "next-intl";
import React from "react";

const HowWe = () => {
  const t = useTranslations("howWeWord");
  const steps = [
    {
      number: "01",
      title: t("firstHead"),
      description: t("firstText"),
    },
    {
      number: "02",
      title: t("secHead"),
      description: t("secText"),
    },
    {
      number: "03",
      title: t("thiHead"),
      description: t("thiText"),
    },
  ];
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8 lg:px-0">
        <div className="mb-3">
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[2px] text-[#BD8B2D]">
            {t("slogan")}
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.5px] text-[#102747] sm:text-4xl lg:text-[40px]">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group min-h-[190px] border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${
                index === 0
                  ? "border-[#D9BB84]"
                  : index === 1
                    ? "border-[#E5E2DC]"
                    : "border-[#DCE3EC]"
              }`}
            >
              <span className="mb-3 block text-[12px] font-semibold tracking-[2px] text-[#BD8B2D]">
                {step.number}
              </span>

              <h3 className="mb-2 text-[19px] font-bold text-[#102747]">
                {step.title}
              </h3>

              <p className="max-w-[320px] text-[14px] leading-[1.7] text-[#71819B]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWe;
