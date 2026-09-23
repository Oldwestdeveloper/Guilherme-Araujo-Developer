'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Settings2,
  Copy,
  Check,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getPersonalInfo } from '@/data/portfolio-data';
import { UI_TRANSLATIONS } from '@/data/translations';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
}

export function Contact() {
  const { language } = useLanguage();
  const personalInfo = getPersonalInfo(language);
  const t = UI_TRANSLATIONS[language].contact;

  const projectTypes = [
    t.inquiryType1,
    t.inquiryType2,
    t.inquiryType3,
    t.inquiryType4,
    t.inquiryType5,
  ];

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    projectType: projectTypes[0],
    message: '',
  });

  // Optional manual EmailJS credentials configuration
  const DEFAULT_SERVICE_ID = 'service_38cvpja';
  const DEFAULT_TEMPLATE_ID = 'template_dggi28l';
  const DEFAULT_PUBLIC_KEY = 'esVS1sLgsDl4DuanG';

  const [showConfigModal, setShowConfigModal] = useState(false);
  const [customServiceId, setCustomServiceId] = useState(DEFAULT_SERVICE_ID);
  const [customTemplateId, setCustomTemplateId] = useState(DEFAULT_TEMPLATE_ID);
  const [customPublicKey, setCustomPublicKey] = useState(DEFAULT_PUBLIC_KEY);
  const [isDismissed, setIsDismissed] = useState(false);

  // Sync and ensure localStorage has the verified production keys
  React.useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('emailjs_service_id', DEFAULT_SERVICE_ID);
        localStorage.setItem('emailjs_template_id', DEFAULT_TEMPLATE_ID);
        localStorage.setItem('emailjs_public_key', DEFAULT_PUBLIC_KEY);
      }
    } catch {
      // ignore
    }
  }, []);

  const isConfigured = true;

  const handleSaveCredentials = () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('emailjs_service_id', customServiceId.trim() || DEFAULT_SERVICE_ID);
        localStorage.setItem('emailjs_template_id', customTemplateId.trim() || DEFAULT_TEMPLATE_ID);
        localStorage.setItem('emailjs_public_key', customPublicKey.trim() || DEFAULT_PUBLIC_KEY);
      }
    } catch {
      // ignore
    }
    setShowConfigModal(false);
  };

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success-real' | 'success-simulated' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const serviceId = DEFAULT_SERVICE_ID;
    const templateId = DEFAULT_TEMPLATE_ID;
    const publicKey = DEFAULT_PUBLIC_KEY;

    const templateParams = {
      name: formData.name.trim(),
      from_name: formData.name.trim(),
      user_name: formData.name.trim(),
      email: formData.email.trim(),
      from_email: formData.email.trim(),
      user_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      to_name: personalInfo.name,
      to_email: personalInfo.email,
      subject: formData.subject.trim() || `${t.defaultSubjectPrefix} ${formData.name.trim()}`,
      title: formData.subject.trim() || `${t.defaultSubjectPrefix} ${formData.name.trim()}`,
      project_type: formData.projectType,
      message: formData.message.trim(),
    };

    let sent = false;

    // 1. Direct EmailJS SDK attempt in browser
    try {
      emailjs.init({ publicKey });
      const res = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });
      if (res.status === 200 || res.text === 'OK') {
        sent = true;
      }
    } catch {
      // Browser SDK blocked or failed (e.g. adblocker, tracking protection or CORS)
      // Fallback seamlessly to server API proxy route below
    }

    // 2. Server API proxy fallback
    if (!sent) {
      try {
        const apiRes = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            serviceId,
            templateId,
            publicKey,
            templateParams,
          }),
        });

        if (apiRes.ok) {
          sent = true;
        } else {
          const errData = await apiRes.json().catch(() => ({}));
          throw new Error(errData.error || t.emailErrorFallback);
        }
      } catch (err: unknown) {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setErrorMessage(
          err instanceof Error ? err.message : t.emailErrorFallback
        );
        return;
      }
    }

    if (sent) {
      setIsSubmitting(false);
      setSubmitStatus('success-real');
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: projectTypes[0],
        message: '',
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 relative"
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

        {/* Two Columns Grid: Direct Info Cards & Contact Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {t.directEmail}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {t.responseGuarantee}
              </p>

              <div className="mt-6 p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors shrink-0 cursor-pointer"
                  title={t.copyEmail}
                  aria-label={t.copyEmail}
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Availability & Location Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {t.immediateAvailability}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {t.availabilityDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-neutral-100 dark:border-neutral-700/60">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {t.locationTitle}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {t.locationDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* EmailJS Status Card & Config Button - automatically hides when active/configured or dismissed */}
            {!isConfigured && !isDismissed && (
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                    EmailJS Config
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setShowConfigModal(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600 font-medium transition-colors border border-neutral-200 dark:border-neutral-600 cursor-pointer"
                    title={t.configureKeys}
                  >
                    <Settings2 className="w-3.5 h-3.5" />
                    <span>{t.configureKeys}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsDismissed(true)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-700 cursor-pointer transition-colors"
                    title="Ocultar"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2"
                    >
                      {t.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      name="user_name"
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2"
                    >
                      {t.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      name="user_email"
                      type="email"
                      required
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2"
                  >
                    {t.inquiryLabel}
                  </label>
                  <select
                    id="contact-project-type"
                    name="project_type"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2"
                  >
                    {t.subjectLabel}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder={t.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2"
                  >
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                  />
                </div>

                {/* Feedback Alerts */}
                {submitStatus === 'success-real' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-3 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">{t.successRealTitle}</p>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                        {t.successRealDesc}
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'success-simulated' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 flex items-start gap-3 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">{t.successSimulatedTitle}</p>
                      <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                        {t.successSimulatedDesc}
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 flex items-start gap-3 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">{t.errorMessageTitle}</p>
                      <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                        {errorMessage || t.errorMessageDesc}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>

      {/* EmailJS Configuration Modal */}
      <AnimatePresence>
        {showConfigModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfigModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-lg bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 dark:border-neutral-700 z-10"
            >
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                {t.configModalTitle}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {t.configModalDesc}
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    {t.serviceIdLabel}
                  </label>
                  <input
                    type="text"
                    value={customServiceId}
                    onChange={(e) => setCustomServiceId(e.target.value)}
                    placeholder="service_..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    {t.templateIdLabel}
                  </label>
                  <input
                    type="text"
                    value={customTemplateId}
                    onChange={(e) => setCustomTemplateId(e.target.value)}
                    placeholder="template_..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    {t.publicKeyLabel}
                  </label>
                  <input
                    type="text"
                    value={customPublicKey}
                    onChange={(e) => setCustomPublicKey(e.target.value)}
                    placeholder="EmailJS public key..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-xs font-mono"
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-semibold hover:bg-neutral-200 cursor-pointer"
                >
                  {t.closeModal}
                </button>
                <button
                  type="button"
                  onClick={handleSaveCredentials}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer"
                >
                  {t.saveCredentials}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
