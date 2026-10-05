'use client';

import React from 'react';

interface UiverseDownloadButtonProps {
  href: string;
  text: string;
  title?: string;
}

export function UiverseDownloadButton({ href, text, title }: UiverseDownloadButtonProps) {
  return (
    <a
      id="hero-drive-cv-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="group relative inline-flex items-center h-[46px] min-w-[175px] max-w-full rounded-xl overflow-hidden border border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-600 cursor-pointer shadow-sm hover:bg-blue-700 dark:hover:bg-blue-700 active:border-blue-800 transition-all duration-300 select-none"
    >
      {/* Text: slides left slightly and fades out on hover */}
      <span className="w-full pl-4 pr-12 text-sm font-semibold text-white whitespace-nowrap transition-all duration-300 group-hover:text-transparent group-hover:opacity-0 group-hover:-translate-x-2">
        {text}
      </span>

      {/* Sliding Icon Container: covers full button on hover */}
      <span className="absolute right-0 top-0 bottom-0 w-[42px] bg-blue-700 dark:bg-blue-700 group-hover:w-full group-active:bg-blue-800 flex items-center justify-center transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35 35"
          className="w-5 h-5 fill-white transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
          <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
        </svg>
      </span>
    </a>
  );
}
