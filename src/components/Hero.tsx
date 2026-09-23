'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  FileText,
  ExternalLink,
  FolderGit2,
  Workflow,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getPersonalInfo } from '@/data/portfolio-data';
import { UI_TRANSLATIONS } from '@/data/translations';

export function Hero() {
  const { language } = useLanguage();
  const personalInfo = getPersonalInfo(language);
  const t = UI_TRANSLATIONS[language].hero;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const getStatIconConfig = (iconName?: string) => {
    switch (iconName) {
      case 'projects':
        return {
          icon: FolderGit2,
          color: 'text-blue-600 dark:text-blue-400',
          bg: 'bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-800/60',
        };
      case 'automation':
        return {
          icon: Workflow,
          color: 'text-indigo-600 dark:text-indigo-400',
          bg: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/60',
        };
      case 'quality':
        return {
          icon: ShieldCheck,
          color: 'text-emerald-600 dark:text-emerald-400',
          bg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800/60',
        };
      case 'availability':
        return {
          icon: Clock,
          color: 'text-amber-600 dark:text-amber-400',
          bg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200/80 dark:border-amber-800/60',
        };
      default:
        return {
          icon: Code2,
          color: 'text-blue-600 dark:text-blue-400',
          bg: 'bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-800/60',
        };
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Main text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15]">
              {t.titlePrefix}
              <span className="text-blue-600 dark:text-blue-400 underline decoration-blue-500/30 decoration-wavy underline-offset-8">
                {t.titleHighlight}
              </span>
            </h1>

            {/* Subheading / Bio */}
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              {t.bioGreeting}{' '}
              <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                {personalInfo.name}
              </strong>
              , {t.bioText}
            </p>

            {/* Location & Quick Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                {personalInfo.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-500" />
                Next.js &bull; React &bull; Node.js &bull; TypeScript &bull; SQL
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                id="hero-projects-btn"
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.exploreProjects}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-btn"
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100 font-medium text-sm transition-all border border-neutral-300 dark:border-neutral-700 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{t.getInTouch}</span>
              </button>

              <a
                id="hero-drive-cv-btn"
                href={personalInfo.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium text-sm transition-all border border-neutral-200 dark:border-neutral-700/80 flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:border-neutral-300 dark:hover:border-neutral-600"
                title={t.downloadCvTitle}
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t.downloadCv}</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center gap-4">
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {t.connect}
              </span>
              <a
                id="hero-social-github"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-social-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-social-email"
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column / Hero Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Visual Frame */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-blue-600 to-indigo-500 opacity-20 dark:opacity-30 blur-2xl -z-10" />

              {/* Card Container - pure photo */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-neutral-200/80 dark:border-neutral-700/80 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 shadow-2xl bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={personalInfo.avatar || personalInfo.secondaryAvatar || '/profile.png'}
                  alt={personalInfo.name}
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 352px, 384px"
                  className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Highlights & Metrics Bar - Non-redundant, interactive key takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {personalInfo.stats.map((stat, idx) => {
            const config = getStatIconConfig(stat.icon);
            const IconComponent = config.icon;
            return (
              <motion.div
                key={idx}
                id={`hero-highlight-card-${idx}`}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs flex flex-col justify-between text-left hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 min-h-[112px]"
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className={`p-2 rounded-xl border ${config.bg} ${config.color}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <span className="block text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-snug">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 leading-snug">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
