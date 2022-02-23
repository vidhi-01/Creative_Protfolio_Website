import React from "react";
import AboutUS from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import {Routes, Route, useLocation} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutUS />}></Route>
        <Route path="/work" element={<OurWork />}></Route>
        <Route path="/work/:id" element={<MovieDetail />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
