"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sun,
  Moon,
  Laptop,
  Menu,
  X,
  Send,
  ArrowUpRight,
  Globe,
  ChevronDown,
  Check,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";
import { getPersonalInfo } from "@/data/portfolio-data";
import { UI_TRANSLATIONS } from "@/data/translations";
import { BrazilFlag, USAFlag } from "./Flags";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const t = UI_TRANSLATIONS[language].navbar;
  const personalInfo = getPersonalInfo(language);
  const navItems = t.items;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setThemeMenuOpen(false);
        setLangMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setThemeMenuOpen(false);
    setLangMenuOpen(false);

    const targetId = href.substring(1);
    if (!targetId || targetId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("home");
      return;
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const offset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const currentScroll = window.scrollY || window.pageYOffset || 0;
      const offsetPosition = elementPosition + currentScroll - offset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-neutral-50/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Monogram */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <span className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 flex items-center justify-center font-bold text-lg tracking-wider transition-transform group-hover:scale-105 shadow-xs">
              GA
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono tracking-widest mt-1">
                {t.portfolioLabel}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-menu"
            className="hidden xl:flex items-center gap-1 bg-neutral-100/80 dark:bg-neutral-800/80 p-1.5 rounded-full border-0"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const isHovered = hoveredNav === item.name;

              return (
                <a
                  key={item.name}
                  id={`nav-link-${item.href.substring(1)}`}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onMouseLeave={() => setHoveredNav(null)}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 focus:outline-none whitespace-nowrap cursor-pointer ${
                    isHovered
                      ? "text-white drop-shadow-xs"
                      : isActive
                        ? "text-neutral-900 dark:text-neutral-50 font-bold"
                        : "text-neutral-600 dark:text-neutral-300"
                  }`}
                >
                  {/* Hover effect styled exactly like About section badge with white text */}
                  {isHovered && (
                    <motion.span
                      layoutId="hoveredNavBackground"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 -z-10"
                    />
                  )}

                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Medium screen condensed nav */}
          <nav
            id="tablet-nav-menu"
            className="hidden md:flex xl:hidden items-center gap-1 bg-neutral-100/80 dark:bg-neutral-800/80 p-1 rounded-full border-0"
          >
            {navItems.slice(0, 5).map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const isHovered = hoveredNav === `tablet-${item.name}`;

              return (
                <a
                  key={item.name}
                  id={`nav-link-tablet-${item.href.substring(1)}`}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(`tablet-${item.name}`)}
                  onMouseLeave={() => setHoveredNav(null)}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isHovered
                      ? "text-white"
                      : isActive
                        ? "text-neutral-900 dark:text-neutral-50 font-bold"
                        : "text-neutral-600 dark:text-neutral-300"
                  }`}
                >
                  {isHovered && (
                    <motion.span
                      layoutId="hoveredNavTabletBackground"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 -z-10"
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher, Theme Toggle & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Dropdown (Menu Suspenso) */}
            <div className="relative">
              <button
                id="language-dropdown-btn"
                type="button"
                onClick={() => {
                  setLangMenuOpen(!langMenuOpen);
                  setThemeMenuOpen(false);
                }}
                className="h-10 px-2.5 sm:px-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 flex items-center gap-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs cursor-pointer"
                aria-label="Selecionar idioma / Select language"
                title={
                  language === "pt"
                    ? "Idioma: Português (Brasil)"
                    : "Language: English (US)"
                }
                aria-expanded={langMenuOpen}
              >
                {language === "pt" ? (
                  <BrazilFlag className="w-5 h-3.5" />
                ) : (
                  <USAFlag className="w-5 h-3.5" />
                )}
                <span className="font-mono text-xs uppercase font-bold tracking-tight">
                  {language === "pt" ? "PT" : "EN"}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 transition-transform duration-200 ${
                    langMenuOpen
                      ? "rotate-180 text-blue-600 dark:text-blue-400"
                      : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setLangMenuOpen(false)}
                    />
                    <motion.div
                      id="language-dropdown-menu"
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-52 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg p-1.5 z-50 text-xs"
                    >
                      <div className="px-2.5 py-1.5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Globe className="w-3 h-3" />
                        <span>{t.langTitle}</span>
                      </div>
                      <button
                        id="lang-option-pt"
                        type="button"
                        onClick={() => {
                          setLanguage("pt");
                          setLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                          language === "pt"
                            ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <BrazilFlag className="w-5 h-3.5" />
                          <span>{t.ptName}</span>
                        </div>
                        {language === "pt" && (
                          <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        )}
                      </button>
                      <button
                        id="lang-option-en"
                        type="button"
                        onClick={() => {
                          setLanguage("en");
                          setLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                          language === "en"
                            ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <USAFlag className="w-5 h-3.5" />
                          <span>{t.enName}</span>
                        </div>
                        {language === "en" && (
                          <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        )}
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Mode Toggle Dropdown */}
            <div className="relative">
              <button
                id="theme-toggle-btn"
                type="button"
                onClick={() => {
                  setThemeMenuOpen(!themeMenuOpen);
                  setLangMenuOpen(false);
                }}
                className="w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs cursor-pointer"
                aria-label="Toggle theme mode (System / Light / Dark)"
                title={`Theme: ${
                  theme === "system"
                    ? `Automatic (${resolvedTheme})`
                    : theme === "dark"
                      ? "Dark"
                      : "Light"
                }`}
              >
                {theme === "system" ? (
                  <Laptop className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                ) : resolvedTheme === "dark" ? (
                  <Moon className="w-4 h-4 text-amber-300" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
              </button>

              <AnimatePresence>
                {themeMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setThemeMenuOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-44 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg p-1.5 z-50 text-xs"
                    >
                      <div className="px-2.5 py-1.5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                        {t.theme}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setTheme("system");
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                          theme === "system"
                            ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-medium"
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        }`}
                      >
                        <Laptop className="w-3.5 h-3.5" />
                        <span>{t.systemDefault}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTheme("light");
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                          theme === "light"
                            ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-medium"
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        }`}
                      >
                        <Sun className="w-3.5 h-3.5" />
                        <span>{t.lightTheme}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTheme("dark");
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                          theme === "dark"
                            ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-medium"
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        }`}
                      >
                        <Moon className="w-3.5 h-3.5" />
                        <span>{t.darkTheme}</span>
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Contact Button */}
            <a
              id="navbar-contact-cta-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium tracking-wide bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition-all shadow-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.getInTouch}</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setThemeMenuOpen(false);
                setLangMenuOpen(false);
              }}
              className="xl:hidden w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-backdrop"
          className="fixed inset-0 top-20 bg-neutral-950/40 backdrop-blur-xs -z-10 xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="xl:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 px-4 pt-3 pb-6 shadow-2xl max-h-[calc(100vh-5.5rem)] overflow-y-auto"
          >
            {/* Mobile Language Switcher Selector */}
            <div className="mb-3 p-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/60 flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 px-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                {t.langTitle}:
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setLanguage("pt")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    language === "pt"
                      ? "bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-xs"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  <BrazilFlag className="w-5 h-3.5" />
                  <span>Português</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    language === "en"
                      ? "bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-xs"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  <USAFlag className="w-5 h-3.5" />
                  <span>English</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                const isLastOdd =
                  idx === navItems.length - 1 && navItems.length % 2 !== 0;
                return (
                  <a
                    key={item.name}
                    id={`mobile-nav-${item.href.substring(1)}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wider transition-all text-center ${
                      isLastOdd ? "col-span-2" : ""
                    } ${
                      isActive
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
                    }`}
                  >
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Footer Status & CTA */}
            <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  {t.available}
                </span>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1"
              >
                <span>{t.sendMessage}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
