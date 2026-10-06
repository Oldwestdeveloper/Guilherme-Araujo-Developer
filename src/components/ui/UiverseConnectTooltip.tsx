'use client';

import React from 'react';
import { Github, Linkedin, Mail, Share2 } from 'lucide-react';

interface UiverseConnectTooltipProps {
  label: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export function UiverseConnectTooltip({
  label,
  githubUrl,
  linkedinUrl,
  email,
}: UiverseConnectTooltipProps) {
  return (
    <div className="relative inline-block group">
      {/* Trigger Button ("Conectar" / "Connect") */}
      <div
        tabIndex={0}
        role="button"
        aria-label={label}
        className="relative z-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer select-none group-hover:-translate-y-0.5"
      >
        <span className="tracking-wide">{label}</span>
        <Share2 className="w-3.5 h-3.5 transition-transform duration-500 ease-out group-hover:rotate-180 group-hover:scale-110" />
      </div>

      {/* Floating Tooltip with Social Icons (GitHub, LinkedIn, Email) */}
      <div className="absolute top-[calc(100%+8px)] left-0 sm:left-1/2 sm:-translate-x-1/2 z-50 p-2.5 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-xl opacity-0 invisible scale-90 translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
        {/* Tooltip Arrow */}
        <div className="absolute -top-1.5 left-6 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rotate-45 bg-white dark:bg-neutral-900 border-t border-l border-neutral-200 dark:border-neutral-700" />

        {/* Social Icons List */}
        <div className="relative flex items-center gap-2">
          {/* GitHub */}
          <a
            id="hero-tooltip-github"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-[#24292e] hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:scale-110 shadow-xs hover:shadow-md cursor-pointer"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            id="hero-tooltip-linkedin"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] dark:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 shadow-xs hover:shadow-md cursor-pointer"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* E-mail */}
          <a
            id="hero-tooltip-email"
            href={`mailto:${email}`}
            aria-label="Send Email"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 shadow-xs hover:shadow-md cursor-pointer"
            title="E-mail"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
