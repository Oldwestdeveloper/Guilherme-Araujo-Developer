'use client';

import React from 'react';

interface UiverseExploreButtonProps {
  onClick?: () => void;
  text: string;
}

export function UiverseExploreButton({ onClick, text }: UiverseExploreButtonProps) {
  return (
    <button
      id="hero-projects-btn"
      type="button"
      onClick={onClick}
      className="group relative inline-flex items-center justify-center gap-2.5 h-[46px] px-5 py-3 rounded-xl bg-neutral-900 hover:bg-blue-600 dark:bg-neutral-800 dark:hover:bg-blue-600 text-white font-medium text-sm transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md select-none border border-neutral-300 dark:border-neutral-700 hover:border-blue-600 dark:hover:border-blue-500"
    >
      {/* Icon Circle Wrapper */}
      <span className="relative flex-shrink-0 w-5 h-5 rounded-full bg-white text-neutral-900 group-hover:text-blue-600 flex items-center justify-center overflow-hidden transition-colors duration-300">
        {/* First Arrow: exits top-right on hover */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-2.5 h-2.5 fill-current transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

        {/* Second Arrow (Copy): enters from bottom-left on hover */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-2.5 h-2.5 fill-current absolute -translate-x-[150%] translate-y-[150%] transition-transform duration-300 ease-in-out delay-75 group-hover:translate-x-0 group-hover:translate-y-0"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>
      </span>

      {/* Button Label */}
      <span>{text}</span>
    </button>
  );
}
