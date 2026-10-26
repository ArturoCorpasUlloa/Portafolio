import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Services from './sections/Services';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import LearningRoute from './sections/LearningRoute';
import Projects from './sections/Projects';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';
import { useLanguage } from './i18n/LanguageContext';

export default function App() {
  const { t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <LearningRoute />
        <Projects />
        <Showcase />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
