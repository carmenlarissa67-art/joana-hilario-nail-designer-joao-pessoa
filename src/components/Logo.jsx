import React from 'react';

// Monograma JH com o traço dourado (como no logo do Instagram) + JOANA HILARIO + NAIL DESIGNER
export default function Logo({ light = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${light ? 'text-white' : 'text-ink'}`}>
      <svg viewBox="0 0 54 50" className="w-11 h-10 shrink-0" fill="none" aria-hidden="true">
        <text x="15" y="38" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="500" fontSize="40" fill={light ? '#e2d5ea' : '#5c4171'}>J</text>
        <text x="34" y="42" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontWeight="500" fontSize="34" fill={light ? '#c8b6d6' : '#8a6ca2'}>H</text>
        <path d="M6 33c0 7 8 9 15 3S36 18 44 19c5 1 4 6 1 7" stroke="#C6A15B" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.35rem] sm:text-[1.55rem] tracking-[0.08em] font-medium">
          JOANA <span className={light ? 'text-brand-200' : 'text-brand-600'}>HILARIO</span>
        </span>
        <span className={`mt-1 text-[8.5px] tracking-[0.5em] font-medium ${light ? 'text-champagne' : 'text-champagne-dark'}`}>NAIL DESIGNER</span>
      </span>
    </span>
  );
}
