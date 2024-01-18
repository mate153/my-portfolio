import { Container } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationHU from "./locales/hu/translation.json";
import AboutMeSection from './components/AboutMeSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import NavbarSection from './components/NavbarSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import WelcomeSection from './components/WelcomeSection.jsx'
import FooterSection from './components/FooterSection.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import './App.css'

const resources = {
  en: {
    translation: translationEN,
  },
  hu: {
    translation: translationHU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t } = useTranslation();

  return (
    <Container className='bg-dark mt-auto' fluid style={{ padding: 0, margin: 0, width: '100%' }}>
      {/*NAVBAR SECTION*/}
      <NavbarSection translation={t} />

      {/*WELCOME SECTION*/}
      <section id="welcome-section">
        <WelcomeSection translation={t} />
      </section>

      {/*ABOUT ME SECTION*/}
      <section id="about-me-section">
        <AboutMeSection translation={t} />
      </section> 

      {/*PROJECTS SECTION*/}
      <section id="projects-section">
        <ProjectsSection translation={t} />
      </section>

      {/*CONTACT SECTION*/}
      <section id="contact-section">
        <ContactSection translation={t} />
      </section>

      {/*SCROLL TO TOP BUTTON*/}
      <ScrollToTopButton translation={t} />

      {/*FOOTER SECTION*/}
      <FooterSection translation={t} />
    </Container>
  )
}

export default App
