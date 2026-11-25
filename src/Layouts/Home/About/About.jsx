import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("AboutSection");
  const values = [t("int"), t("prof"), t("reli")];

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="pt-2">
            <span className="mb-3 block text-[11px] font-extrabold tracking-[2px] text-[#b88727]">
              {t("slogan")}
            </span>

            <h2 className="mb-4 max-w-[550px] text-[32px] font-bold leading-[1.15] tracking-[-0.5px] text-[#102849] sm:text-[38px]">
              {t("title")}
            </h2>

            <p className="max-w-[550px] text-[15px] leading-[1.9] text-[#687b98]">
              {t("text")}
            </p>
          </div>

          <div className="relative bg-[#0e2545] px-7 py-8 text-white sm:px-9 sm:py-9">
            <div className="mb-5">
              <h3 className="mb-5 text-[23px] font-bold">{t("secTitle")}</h3>

              <p className="text-[15px] leading-[1.9] text-[#f0f3f8]">
                {t("secText")}
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-[23px] font-bold">{t("thiTitle")}</h3>

              <p className="text-[15px] leading-[1.9] text-[#f0f3f8]">
                {t("thiText")}
              </p>
            </div>

            <div className="absolute bottom-0 right-0 h-[4px] w-[100px] bg-[#c39432]" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-3">
          {values.map((value) => (
            <div key={value} className="border-t-2 border-[#b88727] pt-3">
              <span className="text-[13px] font-bold text-[#102849]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
