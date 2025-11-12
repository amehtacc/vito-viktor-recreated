import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Socials from "./sections/Socials";
import Nft from "./sections/Nft"
import MeetTeam from "./sections/MeetTeam";
import Faq from "./sections/Faq";
import VitoSongPlay from "./components/VitoSongPlay";
import Footer from "./sections/Footer";

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
        <VitoSongPlay />
      </main>
      <Footer />
    </>
  );
}

export default App;
