"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import React from "react";

const LanSwitch = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const switchLang = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <button
      onClick={switchLang}
      type="button"
      className="w-fit rounded-md border border-[#d18b25] px-5 py-2 text-sm text-[#26364b] cursor-pointer hover:bg-[#d18b25] hover:text-white"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanSwitch;
