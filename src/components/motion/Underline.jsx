import { motion, useReducedMotion } from 'framer-motion';

export function Underline({ children, className, strokeClassName = 'stroke-amber', height = 14 }) {
  const reduced = useReducedMotion();
  return (
    <span className={`relative inline-block ${className ?? ''}`}>
      {children}
      <svg
        className="pointer-events-none absolute left-0 -bottom-2 w-full"
        viewBox="0 0 300 14"
        height={height}
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M2 8 C 60 2, 140 12, 210 6 S 290 4, 298 8"
          fill="none"
          strokeWidth={4}
          strokeLinecap="round"
          className={strokeClassName}
          initial={{ pathLength: reduced ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        />
      </svg>
    </span>
  );
}
