import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export const FramerMotionBasics = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <motion.button
        className="button"
        onClick={() => setVisible(!visible)}
        // Button will have a slide animation on DOM changes that can affect the button visibility
        layout
      >
        {visible ? "Hide" : "Show"}
      </motion.button>
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            className="animate-box"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ rotate: "180deg", opacity: 1, scale: 1, type: "spring" }}
            exit={{ rotate: "0deg", scale: 0 }}
            transition={{ duration: 1.5, ease: "backInOut" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
