'use client';

import React from 'react';

interface UiverseConnectTooltipProps {
  label?: string;
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
    <div className="flex flex-wrap items-center gap-4">
      {label && (
        <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          {label}
        </span>
      )}

      <ul className="flex items-center gap-3 list-none p-0 m-0">
        {/* LinkedIn */}
        <li className="relative group/item flex items-center justify-center">
          {/* Tooltip on top */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-medium text-white bg-[#0274b3] shadow-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible group-hover/item:-top-10 transition-all duration-300 pointer-events-none whitespace-nowrap z-30">
            LinkedIn
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0274b3]" />
          </div>

          {/* Button with liquid bottom-to-top fill effect */}
          <a
            id="hero-social-linkedin"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group-hover/item:text-white"
          >
            {/* Liquid fill overlay */}
            <span className="absolute inset-x-0 bottom-0 h-0 bg-[#0274b3] transition-all duration-300 ease-in-out group-hover/item:h-full z-0" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="relative z-10 transition-transform duration-300 group-hover/item:scale-110"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        </li>

        {/* GitHub */}
        <li className="relative group/item flex items-center justify-center">
          {/* Tooltip on top */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-medium text-white bg-[#24262a] shadow-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible group-hover/item:-top-10 transition-all duration-300 pointer-events-none whitespace-nowrap z-30">
            GitHub
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#24262a]" />
          </div>

          {/* Button with liquid bottom-to-top fill effect */}
          <a
            id="hero-social-github"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group-hover/item:text-white"
          >
            {/* Liquid fill overlay */}
            <span className="absolute inset-x-0 bottom-0 h-0 bg-[#24262a] transition-all duration-300 ease-in-out group-hover/item:h-full z-0" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="relative z-10 transition-transform duration-300 group-hover/item:scale-110"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
        </li>

        {/* E-mail */}
        <li className="relative group/item flex items-center justify-center">
          {/* Tooltip on top */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-medium text-white bg-[#059669] shadow-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible group-hover/item:-top-10 transition-all duration-300 pointer-events-none whitespace-nowrap z-30">
            E-mail
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#059669]" />
          </div>

          {/* Button with liquid bottom-to-top fill effect */}
          <a
            id="hero-social-email"
            href={`mailto:${email}`}
            aria-label="E-mail"
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group-hover/item:text-white"
          >
            {/* Liquid fill overlay */}
            <span className="absolute inset-x-0 bottom-0 h-0 bg-[#059669] transition-all duration-300 ease-in-out group-hover/item:h-full z-0" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="currentColor"
              className="relative z-10 transition-transform duration-300 group-hover/item:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
