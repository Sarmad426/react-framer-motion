import { Fragment } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { FramerMotionBasics } from "./components/FramerMotionBasics";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<FramerMotionBasics />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
