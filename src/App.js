import "./styles/normalize.css";
import "./styles/styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AyurvedaDescription from "./components/AyurvedaDescription";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AyurvedaDescription />
    </>
  );
}

export default App;
