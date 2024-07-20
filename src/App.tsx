import { Fragment } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { FramerMotionBasics } from "./components/FramerMotionBasics";
import Gestures from "./components/Gestures";
import AnimationControls from "./components/animationControls";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<FramerMotionBasics />} />
          <Route path="/gestures" element={<Gestures />} />
          <Route path="/animationControls" element={<AnimationControls />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
