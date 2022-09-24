import "./styles/normalize.css";
import "./styles/styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AyurvedaDescription from "./components/AyurvedaDescription";
import Specialities from "./components/Specialities";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AyurvedaDescription />
      <Specialities />
    </>
  );
}

export default App;
