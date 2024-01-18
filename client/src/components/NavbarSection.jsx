import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import i18next from 'i18next';
import './style/NavbarSection.css'

function NavbarSection({translation}) {
  const [actualLanguage, setActualLanguage] = useState("en");

  const switchLanguage = (language) => {
    i18next.changeLanguage(language);
    setActualLanguage(i18next.language);
  }

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#welcome-section">{translation("my-name")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto justify-content-end" style={{width: '100%'}}>
            <Nav.Link href="#welcome-section">{translation("home")}</Nav.Link>
            <Nav.Link href="#about-me-section">{translation("about-me")}</Nav.Link>
            <Nav.Link href="#projects-section">{translation("projects")}</Nav.Link>
            <Nav.Link href="#contact-section">{translation("contact")}</Nav.Link>&nbsp;&nbsp;
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={<i><img src={"./images/flags/" + actualLanguage + ".png"} width="30" height="30" /></i>}
              menuVariant="dark"
              className="text-light navbar-language-selector"
            >
              <NavDropdown.Item onClick={() => switchLanguage("en")}><img src="./images/flags/en.png" width="25" height="25" />&nbsp;&nbsp;{translation("language_english")}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => switchLanguage("hu")}><img src="./images/flags/hu.png" width="25" height="25" />&nbsp;&nbsp;{translation("language_hungarian")}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarSection