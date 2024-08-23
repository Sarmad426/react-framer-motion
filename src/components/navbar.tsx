import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="sticky top-0">
      <Link to="basics" className="button">
        Basics
      </Link>
      <Link to="gestures" className="button">
        Gestures
      </Link>
      <Link to="animationControls" className="button">
        Animation Controls
      </Link>
      <Link to="viewAnimations" className="button">
        View Animations
      </Link>
      <Link to="scrollAnimations" className="button">
        Scroll Animations
      </Link>
      <Link to="advanceScrollAnimations" className="button">
        Advance Scroll Animations
      </Link>
      <Link to="/tinderSwipeCards" className="button">
        Tinder Swipe Cards
      </Link>
    </nav>
  );
};
