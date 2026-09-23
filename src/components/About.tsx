'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Server,
  Cloud,
  Terminal,
  Cpu,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getPersonalInfo } from '@/data/portfolio-data';
import { UI_TRANSLATIONS } from '@/data/translations';

export function About() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'devops'>('frontend');
  const { language } = useLanguage();
  const personalInfo = getPersonalInfo(language);
  const t = UI_TRANSLATIONS[language].about;

  const currentSkills =
    activeTab === 'frontend'
      ? personalInfo.skills.frontend
      : activeTab === 'backend'
      ? personalInfo.skills.backend
      : personalInfo.skills.devopsAndTools;

  return (
    <section
      id="about"
      className="py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase border border-blue-200 dark:border-blue-900">
            {t.badge}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            {t.subtitle}
          </p>
        </div>

        {/* Histórico & Princípios and Habilidades Técnicas */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Histórico & Princípios */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs h-full flex flex-col">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-5 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                {t.pillarsTitle}
              </h3>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Habilidades Técnicas */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs h-full flex flex-col">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-700/60">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    {t.skillsTitle}
                  </h3>
                </div>
              </div>

              {/* Category Tab Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-6 p-1.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <button
                  type="button"
                  onClick={() => setActiveTab('frontend')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'frontend'
                      ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>{t.tabFrontend}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('backend')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'backend'
                      ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>{t.tabBackend}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('devops')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'devops'
                      ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5" />
                  <span>{t.tabDevops}</span>
                </button>
              </div>

              {/* Skills Display Cards - Separate card per technology */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentSkills.map((skill, idx) => (
                  <motion.div
                    key={`${activeTab}-${skill.name}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.03 }}
                    whileHover={{ y: -2 }}
                    className="p-3.5 sm:p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-700/60 flex items-center gap-2.5 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xs transition-all duration-200 cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
