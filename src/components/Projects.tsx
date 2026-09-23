'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  Sparkles,
  X,
  CheckCircle2,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
  Lock,
  ShieldCheck,
  Eye,
  ZoomIn,
  Layers,
  Expand,
  Shrink,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getProjects, Project } from '@/data/portfolio-data';
import { UI_TRANSLATIONS } from '@/data/translations';

function safeImageUrl(url: string | undefined | null): string {
  if (!url) return '/profile.png';
  const trimmed = url.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}

export function Projects() {
  const { language } = useLanguage();
  const projects = getProjects(language);
  const t = UI_TRANSLATIONS[language].projects;

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return [t.allCategories, ...unique];
  }, [projects, t.allCategories]);
  const [selectedCategory, setSelectedCategory] = useState<string>(t.allCategories);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [fitMode, setFitMode] = useState<'contain' | 'cover'>('contain');

  const isAll = selectedCategory === t.allCategories || selectedCategory === 'All' || selectedCategory === 'Todos';

  const filteredProjects = isAll
    ? projects
    : projects.filter((p) => {
        if (selectedCategory === 'Full-stack' || selectedCategory === 'Full Stack') {
          return p.category === 'Full-stack';
        }
        if (selectedCategory === 'Front-end' || selectedCategory === 'Frontend') {
          return p.category === 'Front-end';
        }
        return p.category === selectedCategory;
      });

  const openProjectModal = (project: Project, initialIndex = 0) => {
    setActiveProjectModal(project);
    setActiveImageIndex(initialIndex);
    setIsLightboxOpen(false);
  };

  const projectImages = activeProjectModal
    ? activeProjectModal.images && activeProjectModal.images.length > 0
      ? activeProjectModal.images
      : [activeProjectModal.image]
    : [];

  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (projectImages.length > 1) {
      setActiveImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
    }
  }, [projectImages.length, setActiveImageIndex]);

  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (projectImages.length > 1) {
      setActiveImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
    }
  }, [projectImages.length, setActiveImageIndex]);

  // Keyboard navigation for carousel and lightbox
  useEffect(() => {
    if (!activeProjectModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          setActiveProjectModal(null);
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectModal, isLightboxOpen, handlePrevImage, handleNextImage]);

  // Helper to check for real external URLs
  const hasRealUrl = (url?: string) => Boolean(url && url.trim() !== '' && url.trim() !== '#');

  return (
    <section
      id="projects"
      className="py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
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

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isCatActive =
              (cat === t.allCategories && isAll) || selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isCatActive
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const imageCount = project.images && project.images.length > 0 ? project.images.length : 1;
              const hasMultipleImages = imageCount > 1;
              const isConfidential = Boolean(project.confidential);

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col rounded-3xl overflow-hidden bg-neutral-50/70 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  {/* Image Container with Next.js Image */}
                  <div
                    className="relative w-full h-52 overflow-hidden bg-neutral-900 cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    <Image
                      src={safeImageUrl(project.image)}
                      alt={project.title}
                      fill
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay for badges readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                    {/* Category Pill on Image */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900/80 text-white backdrop-blur-md shadow-xs">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10">
                      {isConfidential && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/90 text-white backdrop-blur-md shadow-xs">
                          <Lock className="w-3 h-3" />
                          <span>{t.internalOnly || 'Confidencial'}</span>
                        </span>
                      )}
                      {hasMultipleImages && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-900/80 text-white backdrop-blur-md shadow-xs border border-white/10">
                          <Images className="w-3 h-3" />
                          <span>{imageCount} {t.photos}</span>
                        </span>
                      )}
                      {project.featured && !isConfidential && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-600/90 text-white backdrop-blur-md shadow-xs">
                          <Sparkles className="w-3 h-3" />
                          <span>{t.featuredBadge}</span>
                        </span>
                      )}
                    </div>

                    {/* Click preview prompt */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-black/75 text-white backdrop-blur-md flex items-center gap-1 shadow-sm">
                        <Eye className="w-3 h-3" />
                        <span>{t.viewDetails}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        onClick={() => openProjectModal(project)}
                        className="text-xl font-bold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Performance / Business Impact */}
                      {project.metrics && (
                        <div className="mt-4 p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                          <span className="text-xs text-blue-900 dark:text-blue-300 font-medium">
                            {project.metrics}
                          </span>
                        </div>
                      )}

                      {/* Tech Badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-neutral-200/70 dark:bg-neutral-700/60 text-neutral-700 dark:text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-700/60 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => openProjectModal(project)}
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5 cursor-pointer py-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t.viewDetails}</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {hasRealUrl(project.githubUrl) && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700/80 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                            title={t.viewCode}
                            aria-label={`${t.viewCode}: ${project.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {hasRealUrl(project.demoUrl) ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1 text-xs font-medium"
                            title={t.visitLive}
                            aria-label={`${t.visitLive}: ${project.title}`}
                          >
                            <span>{t.demo}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : isConfidential ? (
                          <button
                            type="button"
                            onClick={() => openProjectModal(project)}
                            className="px-2.5 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-[11px] font-medium flex items-center gap-1 hover:bg-amber-500/25 transition-colors cursor-pointer"
                            title={t.confidentialBadge}
                          >
                            <Lock className="w-3 h-3" />
                            <span>{t.ndaGallery}</span>
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Detail Modal with Interactive Carousel & Gallery */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              className="relative w-full max-w-6xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 z-10 max-h-[92vh] lg:h-[86vh] flex flex-col lg:flex-row my-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* Left Column: Interactive Image Carousel & Gallery Stage */}
              <div className="relative w-full lg:w-[58%] xl:w-[60%] flex flex-col bg-neutral-950 shrink-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800">
                {/* Main Image Stage */}
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-0 flex-1 bg-neutral-950 overflow-hidden group/stage select-none">
                  <div
                    className="relative w-full h-full cursor-zoom-in"
                    onClick={() => setIsLightboxOpen(true)}
                    title={t.clickToEnlarge || 'Clique para ampliar'}
                  >
                    <Image
                      key={projectImages[activeImageIndex] || activeProjectModal.image}
                      src={safeImageUrl(projectImages[activeImageIndex] || activeProjectModal.image)}
                      alt={`${activeProjectModal.title} captura ${activeImageIndex + 1}`}
                      fill
                      referrerPolicy="no-referrer"
                      priority
                      className={`transition-all duration-300 ${
                        fitMode === 'contain' ? 'object-contain' : 'object-cover'
                      }`}
                    />
                  </div>

                  {/* Top Controls Overlay on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                    {/* Left: Category and Mode */}
                    <div className="flex items-center gap-2 pointer-events-auto">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-md">
                        {activeProjectModal.category}
                      </span>
                      {activeProjectModal.confidential && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white shadow-md flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          <span>{t.confidentialBadge}</span>
                        </span>
                      )}
                    </div>

                    {/* Right: Fit toggle, Fullscreen, and Mobile Close */}
                    <div className="flex items-center gap-2 pointer-events-auto">
                      {/* Toggle contain/cover */}
                      <button
                        type="button"
                        onClick={() => setFitMode((prev) => (prev === 'contain' ? 'cover' : 'contain'))}
                        className="px-2.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center gap-1 text-xs font-medium transition-colors cursor-pointer backdrop-blur-md shadow-md"
                        title={fitMode === 'contain' ? t.fitCover : t.fitContain}
                        aria-label="Alternar ajuste de imagem"
                      >
                        {fitMode === 'contain' ? (
                          <>
                            <Expand className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{t.fitCover}</span>
                          </>
                        ) : (
                          <>
                            <Shrink className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{t.fitContain}</span>
                          </>
                        )}
                      </button>

                      {/* Fullscreen Lightbox Button */}
                      <button
                        type="button"
                        onClick={() => setIsLightboxOpen(true)}
                        className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-md"
                        title={t.fullscreen}
                        aria-label={t.fullscreen}
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>

                      {/* Mobile Close Button (visible only below lg) */}
                      <button
                        type="button"
                        onClick={() => setActiveProjectModal(null)}
                        className="lg:hidden w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-md"
                        aria-label={t.close}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Click to expand hover hint */}
                  <div
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute bottom-4 left-4 z-20 pointer-events-auto cursor-pointer"
                  >
                    <span className="px-3 py-1.5 rounded-full bg-black/65 hover:bg-black/85 text-white text-xs font-medium backdrop-blur-md shadow-md flex items-center gap-1.5 transition-colors">
                      <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                      <span>{t.clickToEnlarge}</span>
                    </span>
                  </div>

                  {/* Carousel Controls if multiple images exist */}
                  {projectImages.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        type="button"
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all cursor-pointer z-20 backdrop-blur-md shadow-md"
                        aria-label={t.prevPhoto}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {/* Next Button */}
                      <button
                        type="button"
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all cursor-pointer z-20 backdrop-blur-md shadow-md"
                        aria-label={t.nextPhoto}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Slide Counter & Indicators */}
                      <div className="absolute bottom-4 right-4 z-20">
                        <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md flex items-center gap-2 text-white text-xs font-medium shadow-md">
                          <span className="font-mono">
                            {activeImageIndex + 1} / {projectImages.length}
                          </span>
                          <div className="flex items-center gap-1">
                            {projectImages.map((_, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImageIndex(idx);
                                }}
                                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                  activeImageIndex === idx
                                    ? 'w-4 bg-blue-500'
                                    : 'w-1.5 bg-white/50 hover:bg-white/80'
                                }`}
                                aria-label={`Ir para imagem ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails bar if multiple images exist */}
                {projectImages.length > 1 && (
                  <div className="px-4 py-2.5 bg-neutral-900 border-t border-neutral-800 flex items-center gap-2.5 overflow-x-auto shrink-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                      <Images className="w-3 h-3 text-blue-400" />
                      <span>{t.gallery}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      {projectImages.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer bg-neutral-950 ${
                            activeImageIndex === idx
                              ? 'border-blue-500 ring-2 ring-blue-500/40 scale-105'
                              : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                          }`}
                        >
                          <Image
                            src={safeImageUrl(img)}
                            alt={`Miniatura ${idx + 1}`}
                            fill
                            referrerPolicy="no-referrer"
                            className="object-cover"
                          />
                          <span className="absolute bottom-0 right-0 px-1 text-[8px] bg-black/80 text-white font-mono rounded-tl">
                            {idx + 1}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Project Details & Content */}
              <div className="w-full lg:w-[42%] xl:w-[40%] flex flex-col justify-between bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* Scrollable Details Body */}
                <div className="p-6 sm:p-7 space-y-5 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {/* Top Bar with Category & Desktop Close Button */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                      {activeProjectModal.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(null)}
                      className="hidden lg:flex w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white items-center justify-center transition-colors cursor-pointer"
                      aria-label={t.close}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-snug">
                      {activeProjectModal.title}
                    </h3>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
                      {activeProjectModal.longDescription || activeProjectModal.description}
                    </p>
                  </div>

                  {/* Confidentiality Notice Banner if applicable */}
                  {activeProjectModal.confidential && (
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 flex items-start gap-3">
                      <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-amber-900 dark:text-amber-200">
                          {t.confidentialBadge}
                        </h4>
                        <p className="text-[11px] text-amber-800 dark:text-amber-300/90 leading-relaxed mt-0.5">
                          {t.confidentialNotice}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Business Impact / Metrics */}
                  {activeProjectModal.metrics && (
                    <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <div>
                        <p className="text-[11px] font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                          {t.impact}
                        </p>
                        <p className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-0.5">
                          {activeProjectModal.metrics}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Screenshots Gallery Section (Grid view for rapid visual exploration) */}
                  {projectImages.length > 1 && (
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-blue-500" />
                          <span>{t.screenshotsTitle} ({projectImages.length})</span>
                        </h4>
                        <button
                          type="button"
                          onClick={() => setIsLightboxOpen(true)}
                          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>{t.fullscreen}</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {projectImages.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setActiveImageIndex(idx);
                              setIsLightboxOpen(true);
                            }}
                            className={`group relative h-20 sm:h-22 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                              activeImageIndex === idx
                                ? 'border-blue-500 shadow-md'
                                : 'border-neutral-200 dark:border-neutral-700 hover:border-blue-400'
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`Captura ${idx + 1}`}
                              fill
                              referrerPolicy="no-referrer"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white text-[11px] font-medium backdrop-blur-xs">
                              <ZoomIn className="w-3 h-3 text-blue-400" />
                              <span>Ampliar</span>
                            </div>
                            <div className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[9px] font-mono">
                              #{idx + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      {t.techStack}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProjectModal.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons Bar */}
                <div className="p-4 sm:p-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-2.5 bg-neutral-50/60 dark:bg-neutral-900/60 shrink-0">
                  <div className="flex items-center gap-2">
                    {projectImages.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setIsLightboxOpen(true)}
                        className="px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-blue-500" />
                        <span>{t.fullscreen}</span>
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {hasRealUrl(activeProjectModal.githubUrl) && (
                      <a
                        href={activeProjectModal.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{t.viewRepo}</span>
                      </a>
                    )}

                    {hasRealUrl(activeProjectModal.demoUrl) ? (
                      <a
                        href={activeProjectModal.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                      >
                        <span>{t.visitProject}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActiveProjectModal(null)}
                        className="px-4 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>{t.close}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN LIGHTBOX VIEWER */}
      <AnimatePresence>
        {isLightboxOpen && activeProjectModal && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 select-none">
            {/* Lightbox Top Header */}
            <div className="flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <span className="text-white text-base sm:text-lg font-bold">
                  {activeProjectModal.title}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-mono">
                  {activeImageIndex + 1} de {projectImages.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label={t.close}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Lightbox Main Stage */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <div className="relative w-full h-full max-w-6xl max-h-[82vh] flex items-center justify-center">
                <Image
                  key={projectImages[activeImageIndex] || activeProjectModal.image}
                  src={safeImageUrl(projectImages[activeImageIndex] || activeProjectModal.image)}
                  alt={`${activeProjectModal.title} tela cheia ${activeImageIndex + 1}`}
                  fill
                  referrerPolicy="no-referrer"
                  priority
                  className="object-contain"
                />
              </div>

              {/* Prev / Next Buttons in Lightbox */}
              {projectImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-neutral-700 shadow-xl"
                    aria-label={t.prevPhoto}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-neutral-700 shadow-xl"
                    aria-label={t.nextPhoto}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Bottom Thumbnails & Shortcuts Hint */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 z-20 pt-2 border-t border-neutral-800">
              <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300">←</span>
                <span>Anterior</span>
                <span className="mx-1">•</span>
                <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300">→</span>
                <span>Próxima</span>
                <span className="mx-1">•</span>
                <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300">ESC</span>
                <span>Fechar</span>
              </div>

              {projectImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
                  {projectImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-9 sm:w-16 sm:h-11 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-blue-500 ring-2 ring-blue-500/50 scale-105'
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={safeImageUrl(img)}
                        alt={`Miniatura ${idx + 1}`}
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
