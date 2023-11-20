import "./App.css";
import Contact from "./Component/Contact/Contact";
import Features from "./Component/Features/Features";
import Header from "./Component/Head/Header";
import Hero from "./Component/Hero/Hero";
import Portfolio from "./Component/Portfolio/Portfolio";
import Resume from "./Component/Resume/Resume";
import Testimonial from "./Component/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Contact />
    </>
  );
}
export default App;
