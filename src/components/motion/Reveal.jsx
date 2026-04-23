import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({ children, delay = 0, y = 24, as = 'div', className, ...rest }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];
  const initial = reduced ? { opacity: 0 } : { opacity: 0, y };
  const animate = reduced ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({ children, delay = 0, stagger = 0.09, className }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, y = 24, className, ...rest }) {
  const reduced = useReducedMotion();
  const hidden = reduced ? { opacity: 0 } : { opacity: 0, y };
  const visible = reduced ? { opacity: 1 } : { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      variants={{
        hidden,
        visible: { ...visible, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
