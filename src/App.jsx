import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Socials from "./sections/Socials";
import Nft from "./sections/Nft"
import MeetTeam from "./sections/MeetTeam";
import Faq from "./sections/Faq";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Socials />
        <Nft />
        <MeetTeam />
        <Faq />
      </main>
    </>
  );
}

export default App;
