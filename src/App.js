import "./styles/normalize.css";
import "./styles/styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AyurvedaDescription from "./components/AyurvedaDescription";
import Reviews from "./components/Reviews";
import MeetTheDoctor from "./components/MeetTheDoctor";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AyurvedaDescription />
      <Reviews />
      <MeetTheDoctor />
      <Contact />
    </>
  );
}

export default App;
