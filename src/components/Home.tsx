import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <nav>
        <Link to="basics" className="button">
          Basics
        </Link>
        <Link to="gestures" className="button">
          Gestures
        </Link>
        <Link to="animationControls" className="button">
          Animation Controls
        </Link>
      </nav>
      <motion.div
        className="card"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        Drag horizontally. (X axis)
      </motion.div>
      <motion.div
        className="card"
        whileHover={{ rotate: `5deg`, scale: 1.5 }}
        drag="y"
      >
        Drag vertically. (Y axis)
      </motion.div>
    </main>
  );
};

export default Home;
