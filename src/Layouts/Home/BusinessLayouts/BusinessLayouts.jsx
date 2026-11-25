import { useTranslations } from "next-intl";

const BusinessLayouts = () => {
  const t = useTranslations("businessLayouts");

  const businessPillars = [
    {
      number: "01",
      category: "TRADE",
      title: t("firstHead"),
      description: t("firstText"),
    },
    {
      number: "02",
      category: "BUILD",
      title: t("secHead"),
      description: t("secText"),
    },
    {
      number: "03",
      category: "PEOPLE",
      title: t("thiHead"),
      description: t("thiText"),
    },
    {
      number: "04",
      category: "GROWTH",
      title: t("foHead"),
      description: t("foText"),
    },
    {
      number: "05",
      category: "INSIGHT",
      title: t("fiHead"),
      description: t("fiText"),
    },
  ];

  return (
    <section className="w-full bg-[#f3f6fa] py-16 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-0">
        <div className="mb-9">
          <span className="mb-2 block text-[12px] font-bold tracking-[2px] text-[#bd8b26]">
            {t("slogan")}
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.7px] text-[#102747] sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#64748b] sm:text-base">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessPillars.map((item) => (
            <div
              key={item.number}
              className="group min-h-[190px] border border-[#dfe6ef] bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c59a45] hover:shadow-[0_10px_30px_rgba(16,39,71,0.06)]"
            >
              <span className="mb-3 block text-[12px] font-medium tracking-[1.8px] text-[#bd8b26]">
                {item.number} / {item.category}
              </span>

              <h3 className="mb-2 text-[19px] font-bold leading-6 text-[#102747]">
                {item.title}
              </h3>

              <p className="text-[14px] leading-6 text-[#64748b]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLayouts;
