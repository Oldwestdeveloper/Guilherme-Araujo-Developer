'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getPersonalInfo } from '@/data/portfolio-data';
import { UI_TRANSLATIONS } from '@/data/translations';

export function Footer() {
  const { language } = useLanguage();
  const personalInfo = getPersonalInfo(language);
  const tNav = UI_TRANSLATIONS[language].nav;
  const t = UI_TRANSLATIONS[language].footer;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: tNav.home, href: '#home' },
    { name: tNav.about, href: '#about' },
    { name: tNav.projects, href: '#projects' },
    { name: tNav.experience, href: '#experience' },
    { name: tNav.education, href: '#education' },
    { name: tNav.testimonials, href: '#testimonials' },
    { name: tNav.contact, href: '#contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetEl = document.getElementById(href.substring(1));
    if (targetEl) {
      const offset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-neutral-100 dark:border-neutral-800">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center font-bold text-lg">
              GA
            </span>
            <div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                {personalInfo.name}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Nav quick links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400 tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label={t.backToTop}
            title={t.backToTop}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright and socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. {t.allRightsReserved}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="flex items-center gap-1 text-[11px]">
            <span>{t.builtWith}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
