import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Wraps a page so it fades in on mount. No-ops when the user prefers reduced motion. */
const PageTransition = ({ children }: { children: ReactNode }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
