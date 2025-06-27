import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import BeforeAfter from "../components/BeforeAfter";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="beforeafter"><BeforeAfter /></div>
      <div id="howitworks"><HowItWorks /></div>
      <div id="services"><Services /></div>
      <div id="faq"><FAQ /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}
