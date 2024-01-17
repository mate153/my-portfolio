import { Container } from 'react-bootstrap';
import AboutMeSection from './components/AboutMeSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import NavbarSection from './components/NavbarSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import WelcomeSection from './components/WelcomeSection.jsx'
import FooterSection from './components/FooterSection.jsx'
import './App.css'

function App() {

  return (
    <Container className='bg-dark mt-auto' fluid style={{ padding: 0, margin: 0, width: '100%' }}>
      {/*NAVBAR SECTION*/}
      <section id="navbar-section">
        <NavbarSection />
      </section>

      {/*WELCOME SECTION*/}
      <section id="welcome-section">
        <WelcomeSection />
      </section>

      {/*ABOUT ME SECTION*/}
      <section id="about-me-section">
        <AboutMeSection />
      </section>

      {/*PROJECTS SECTION*/}
      <section id="projects-section">
        <ProjectsSection />
      </section>

      {/*CONTACT SECTION*/}
      <section id="contact-section">
        <ContactSection />
      </section>

      {/*FOOTER SECTION*/}
      <FooterSection />
    </Container>
  )
}

export default App
