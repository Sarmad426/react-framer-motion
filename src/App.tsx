import { Fragment } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { FramerMotionBasics } from "./components/FramerMotionBasics";
import Gestures from "./components/Gestures";
import AnimationControls from "./components/animationControls";
import { ViewAnimations } from "./components/viewAnimations";
import { ScrollAnimations } from "./components/scrollAnimations";
import { AdvanceScrollAnimations } from "./components/advanceScrollAnimations";
import SwipeCards from "./components/TinderSwipeCards";
import { NotFound } from "./components/404-not-found";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<FramerMotionBasics />} />
          <Route path="/gestures" element={<Gestures />} />
          <Route path="/animationControls" element={<AnimationControls />} />
          <Route path="/viewAnimations" element={<ViewAnimations />} />
          <Route path="/scrollAnimations" element={<ScrollAnimations />} />
          <Route
            path="/advanceScrollAnimations"
            element={<AdvanceScrollAnimations />}
          />
          <Route path="/tinderSwipeCards" element={<SwipeCards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
