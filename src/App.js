import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import About from "./components/About";
import Details from "./components/Details";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Prizes />
      <About />
      <Details />
      <Footer />
    </>
  );
}

export default App;
