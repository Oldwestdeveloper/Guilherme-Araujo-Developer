'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Award,
  Languages,
  CheckCircle2,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getEducation, getCertifications } from '@/data/portfolio-data';
import { UI_TRANSLATIONS } from '@/data/translations';

export function Education() {
  const { language } = useLanguage();
  const education = getEducation(language);
  const certifications = getCertifications(language);
  const t = UI_TRANSLATIONS[language].education;

  return (
    <section
      id="education"
      className="py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900"
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

        {/* Academic Degrees & Certifications */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Degrees Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>{t.degreesTitle}</span>
            </h3>

            {education.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group p-6 sm:p-8 rounded-3xl bg-neutral-50/80 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {edu.credentialUrl ? (
                      <a
                        href={edu.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border transition-all hover:scale-105 ${
                          (edu.status || edu.period).toLowerCase().includes('conclu') ||
                          (edu.status || edu.period).toLowerCase().includes('grad') ||
                          (edu.status || edu.period).toLowerCase().includes('complete')
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60'
                            : 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60'
                        }`}
                        title={t.viewDiploma}
                        aria-label={t.viewDiploma}
                      >
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-semibold">{edu.status || edu.period}</span>
                        <ExternalLink className="w-3 h-3 shrink-0 ml-0.5 opacity-70" />
                      </a>
                    ) : (
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${
                          (edu.status || edu.period).toLowerCase().includes('conclu') ||
                          (edu.status || edu.period).toLowerCase().includes('grad') ||
                          (edu.status || edu.period).toLowerCase().includes('complete')
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                            : 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-semibold">{edu.status || edu.period}</span>
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {edu.description}
                </p>

                {edu.honors && (
                  <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs font-medium text-amber-800 dark:text-amber-300 flex items-center gap-2">
                    <Award className="w-4 h-4 shrink-0" />
                    <span>{edu.honors}</span>
                  </div>
                )}

                {edu.courses && (
                  <div className="mt-5 pt-4 border-t border-neutral-200/60 dark:border-neutral-700/60">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                      {t.coursesTitle}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course: string) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md text-xs bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Certifications & Languages Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>{t.certificationsTitle}</span>
            </h3>

            <div className="space-y-3.5">
              {certifications.map((cert) => {
                const statusText = cert.status || t.completedStatus;
                const isCompleted =
                  statusText.toLowerCase().includes('conclu') ||
                  statusText.toLowerCase().includes('complete');

                return (
                  <motion.a
                    key={cert.id}
                    href={cert.credentialUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="group p-4 rounded-2xl bg-neutral-50/80 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/30 dark:hover:bg-neutral-800 transition-all shadow-xs hover:shadow cursor-pointer"
                    title={`${t.verifyCredential} ${cert.name}`}
                    aria-label={`${t.verifyCredential} ${cert.name}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 flex items-center justify-center shrink-0 transition-colors">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-tight transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                          {cert.issuer} &bull; {cert.issueDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ${
                          isCompleted
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                            : 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300'
                        }`}
                      >
                        {statusText}
                      </span>
                      <span className="p-1 rounded-md text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Languages Card */}
            <div className="p-4 sm:p-6 rounded-3xl bg-neutral-50/80 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs">
              <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2 mb-4">
                <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t.languagesTitle}</span>
              </h4>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-700/60 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    {t.langPt}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 whitespace-nowrap shrink-0">
                    {t.langPtLevel}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-700/60 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    {t.langEn}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 whitespace-nowrap shrink-0">
                    {t.langEnLevel}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-700/60 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    {t.langEs}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 whitespace-nowrap shrink-0">
                    {t.langEsLevel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
