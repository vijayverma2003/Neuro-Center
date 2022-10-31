import "./styles/normalize.css";
import "./styles/styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AyurvedaDescription from "./components/AyurvedaDescription";
import Reviews from "./components/Reviews";
import MeetTheDoctor from "./components/MeetTheDoctor";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AyurvedaDescription />
      {/* <Gallery /> */}
      <Reviews />
      <MeetTheDoctor />
      <Contact />
    </>
  );
}

export default App;
