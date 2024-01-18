import React from 'react'
import './style/FooterSection.css'
import { Container, Nav } from 'react-bootstrap';

function FooterSection({translation}) {
  return (
    <>
      <Container className='bg-dark' data-bs-theme="dark" fluid style={{ padding: 0, margin: 0, width: '100%' }}>
        <footer className="py-5">
          <Nav className="justify-content-center border-bottom pb-3 mb-3">
            <Nav.Link href="#welcome-section" className="px-2 text-muted">{translation("home")}</Nav.Link>
            <Nav.Link href="#about-me-section" className="px-2 text-muted">{translation("about-me")}</Nav.Link>
            <Nav.Link href="#projects-section" className="px-2 text-muted">{translation("projects")}</Nav.Link>
            <Nav.Link href="#contact-section" className="px-2 text-muted">{translation("contact")}</Nav.Link>
          </Nav>
          <p className="text-center text-muted">&copy; 2024 {translation("my-name")}</p>
        </footer>
      </Container>
    </>
  )
}

export default FooterSection
