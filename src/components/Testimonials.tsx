'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTestimonials } from '@/data/portfolio-data';
import { UI_TRANSLATIONS } from '@/data/translations';

export function Testimonials() {
  const { language } = useLanguage();
  const testimonials = getTestimonials(language);
  const t = UI_TRANSLATIONS[language].testimonials;

  return (
    <section
      id="testimonials"
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
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs hover:shadow-lg transition-all relative"
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Content Quote */}
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-600 shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    referrerPolicy="no-referrer"
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {testimonial.role} &bull; {testimonial.company}
                  </p>
                  <p className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                    {testimonial.projectRelation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Trust Statement */}
        <div className="mt-12 p-4 rounded-2xl bg-white dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-300 text-center">
          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{t.verification}</span>
        </div>
      </motion.div>
    </section>
  );
}
