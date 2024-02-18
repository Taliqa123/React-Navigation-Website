import { useState } from "react";
import NavigationBar from "./components/navigation/Navigation";
import Hero from "./components/HeroSection/Hero";
import CallStack from "./components/callStack/CallStack";
import Experts from "./components/experts/Experts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <NavigationBar />
        <Hero />
        <CallStack />
        <Experts />
        <Footer />
      </div>
    </>
  );
}

export default App;
