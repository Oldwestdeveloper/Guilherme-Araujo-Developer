'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Building2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getExperiences } from '@/data/portfolio-data';
import { UI_TRANSLATIONS } from '@/data/translations';

export function Experience() {
  const { language } = useLanguage();
  const experiences = getExperiences(language);
  const t = UI_TRANSLATIONS[language].experience;

  return (
    <section
      id="experience"
      className="py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40"
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

        {/* Timeline */}
        <div className="mt-16 max-w-4xl mx-auto relative">
          {/* Vertical central/left line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-neutral-200 dark:bg-neutral-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6 sm:gap-10"
              >
                {/* Timeline Icon / Node */}
                <div className="relative z-10 w-8 h-8 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-neutral-800 border-2 border-blue-600 dark:border-blue-500 shadow-md flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Experience Card */}
                <div className="flex-1 p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs hover:shadow-md transition-shadow">
                  {/* Role and Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-100 dark:border-neutral-700/60">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements bullet points */}
                  <div className="mt-5 space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      {t.keyContributions}
                    </h4>
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-700/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
