import React from 'react';

interface FlagProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * High-fidelity Brazil SVG Flag
 * Renders identically across all operating systems without depending on emoji font support (e.g. Windows).
 */
export function BrazilFlag({ className = '', size = 'md' }: FlagProps) {
  const sizeClasses = {
    sm: 'w-4 h-3',
    md: 'w-5 h-3.5',
    lg: 'w-6 h-4',
  }[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 504"
      className={`${sizeClasses} ${className} shrink-0 inline-block rounded-xs shadow-2xs overflow-hidden`}
      aria-hidden="true"
    >
      <title>Bandeira do Brasil</title>
      {/* Green Field */}
      <rect width="720" height="504" fill="#009c3b" />
      {/* Yellow Rhombus */}
      <polygon points="360,42 678,252 360,462 42,252" fill="#ffdf00" />
      {/* Blue Celestial Globe */}
      <circle cx="360" cy="252" r="126" fill="#002776" />
      {/* White Celestial Band */}
      <path
        d="M 234 250 A 130 130 0 0 0 486 250 A 126 126 0 0 1 234 250"
        fill="#ffffff"
      />
      {/* Southern cross and celestial stars representation */}
      <g fill="#ffffff">
        <circle cx="360" cy="216" r="4" />
        <circle cx="318" cy="246" r="3.5" />
        <circle cx="334" cy="272" r="4.5" />
        <circle cx="348" cy="288" r="4" />
        <circle cx="362" cy="280" r="4.5" />
        <circle cx="380" cy="268" r="4" />
        <circle cx="400" cy="254" r="3.5" />
        <circle cx="386" cy="236" r="3.5" />
        <circle cx="360" cy="305" r="3.5" />
      </g>
    </svg>
  );
}

/**
 * High-fidelity United States SVG Flag
 * Renders identically across all operating systems without depending on emoji font support (e.g. Windows).
 */
export function USAFlag({ className = '', size = 'md' }: FlagProps) {
  const sizeClasses = {
    sm: 'w-4 h-3',
    md: 'w-5 h-3.5',
    lg: 'w-6 h-4',
  }[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 741 390"
      className={`${sizeClasses} ${className} shrink-0 inline-block rounded-xs shadow-2xs overflow-hidden`}
      aria-hidden="true"
    >
      <title>United States Flag</title>
      {/* 13 Stripes */}
      <rect width="741" height="390" fill="#b22234" />
      <path
        d="M0 30h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0zm0 60h741v30H0z"
        fill="#ffffff"
      />
      {/* Blue Canton (Union) */}
      <rect width="296.4" height="210" fill="#3c3b6e" />
      {/* Stars Grid */}
      <g fill="#ffffff">
        {/* Row 1 */}
        <circle cx="24.7" cy="17.5" r="6" />
        <circle cx="74.1" cy="17.5" r="6" />
        <circle cx="123.5" cy="17.5" r="6" />
        <circle cx="172.9" cy="17.5" r="6" />
        <circle cx="222.3" cy="17.5" r="6" />
        <circle cx="271.7" cy="17.5" r="6" />
        {/* Row 2 */}
        <circle cx="49.4" cy="35" r="6" />
        <circle cx="98.8" cy="35" r="6" />
        <circle cx="148.2" cy="35" r="6" />
        <circle cx="197.6" cy="35" r="6" />
        <circle cx="247.0" cy="35" r="6" />
        {/* Row 3 */}
        <circle cx="24.7" cy="52.5" r="6" />
        <circle cx="74.1" cy="52.5" r="6" />
        <circle cx="123.5" cy="52.5" r="6" />
        <circle cx="172.9" cy="52.5" r="6" />
        <circle cx="222.3" cy="52.5" r="6" />
        <circle cx="271.7" cy="52.5" r="6" />
        {/* Row 4 */}
        <circle cx="49.4" cy="70" r="6" />
        <circle cx="98.8" cy="70" r="6" />
        <circle cx="148.2" cy="70" r="6" />
        <circle cx="197.6" cy="70" r="6" />
        <circle cx="247.0" cy="70" r="6" />
        {/* Row 5 */}
        <circle cx="24.7" cy="87.5" r="6" />
        <circle cx="74.1" cy="87.5" r="6" />
        <circle cx="123.5" cy="87.5" r="6" />
        <circle cx="172.9" cy="87.5" r="6" />
        <circle cx="222.3" cy="87.5" r="6" />
        <circle cx="271.7" cy="87.5" r="6" />
        {/* Row 6 */}
        <circle cx="49.4" cy="105" r="6" />
        <circle cx="98.8" cy="105" r="6" />
        <circle cx="148.2" cy="105" r="6" />
        <circle cx="197.6" cy="105" r="6" />
        <circle cx="247.0" cy="105" r="6" />
        {/* Row 7 */}
        <circle cx="24.7" cy="122.5" r="6" />
        <circle cx="74.1" cy="122.5" r="6" />
        <circle cx="123.5" cy="122.5" r="6" />
        <circle cx="172.9" cy="122.5" r="6" />
        <circle cx="222.3" cy="122.5" r="6" />
        <circle cx="271.7" cy="122.5" r="6" />
        {/* Row 8 */}
        <circle cx="49.4" cy="140" r="6" />
        <circle cx="98.8" cy="140" r="6" />
        <circle cx="148.2" cy="140" r="6" />
        <circle cx="197.6" cy="140" r="6" />
        <circle cx="247.0" cy="140" r="6" />
        {/* Row 9 */}
        <circle cx="24.7" cy="157.5" r="6" />
        <circle cx="74.1" cy="157.5" r="6" />
        <circle cx="123.5" cy="157.5" r="6" />
        <circle cx="172.9" cy="157.5" r="6" />
        <circle cx="222.3" cy="157.5" r="6" />
        <circle cx="271.7" cy="157.5" r="6" />
      </g>
    </svg>
  );
}
