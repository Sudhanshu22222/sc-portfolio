import Header from './components/Header';
import Hero from './sections/Hero';
import { About, Skills, Experience, Education } from './sections/Content';
import { Projects, Credentials, Insights } from './sections/Work';
import { Contact, Footer } from './sections/Contact';

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Credentials />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
