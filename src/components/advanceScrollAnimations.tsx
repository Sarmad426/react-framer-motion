import { motion } from "framer-motion";

export const AdvanceScrollAnimations = () => {
  return (
    <motion.div>
      <div className="flex" style={{ height: "100vh" }}>
        Hi, Sarmad here
      </div>
      <motion.div
        initial={{ translateX: -300, opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        viewport={{ margin: "-300px" }}
        className="flex"
        style={{ height: "100vh" }}
      >
        <div className="animate-box"></div>
      </motion.div>
    </motion.div>
  );
};
