"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/logo.png";
import { useTranslations } from "next-intl";
import LanSwitch from "./LanSwitch";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");

  const navLinks = [
    { name: t("about"), href: "/about" },
    { name: t("business"), href: "#businesses" },
    { name: t("approach"), href: "#approach" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="mx-auto flex min-h-[76px] max-w-[1160px] items-center justify-between px-5 py-3 sm:px-8 lg:px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Orvesta Global Company Home"
        >
          {/* Logo mark */}

          {/* Logo text */}
          <Image src={logo} width={100} alt="Logo" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-[#26364b] transition-colors hover:text-[#c98219]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Language button */}
        <div className="hidden md:block">
          <LanSwitch />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-gray-200 md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-[#26364b] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-[#26364b] transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-[#26364b] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#26364b] transition-colors hover:text-[#c98219]"
              >
                {link.name}
              </Link>
            ))}

            <LanSwitch />
          </div>
        </div>
      )}
    </header>
  );
}
