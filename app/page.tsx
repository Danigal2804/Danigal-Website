import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ContactForm />
    </main>
  );
}
