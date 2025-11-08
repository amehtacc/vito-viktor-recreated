import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Socials from "./sections/Socials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Socials />
      </main>
    </>
  );
}

export default App;
