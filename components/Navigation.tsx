import React, { useState } from "react";
import { greetings, socialLinks } from "../portfolio";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from "reactstrap";
import { Icon } from "@iconify/react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <header>
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container>
          <NavbarBrand href="#hero" className="custom-brand" onClick={closeNav}>
            <span>{greetings.name}</span>
            <span className="custom-brand-badge">Portfolio</span>
          </NavbarBrand>

          <NavbarToggler
            onClick={toggle}
            aria-label="Toggle navigation"
            className="navbar-dark border-0 p-1"
          >
            <Icon icon="heroicons:bars-3" width="28" height="28" color="#f8fafc" />
          </NavbarToggler>

          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav className="align-items-lg-center" navbar>
              <NavItem>
                <NavLink href="#about" className="nav-link-custom" onClick={closeNav}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills" className="nav-link-custom" onClick={closeNav}>
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" className="nav-link-custom" onClick={closeNav}>
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#education" className="nav-link-custom" onClick={closeNav}>
                  Education
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#certifications" className="nav-link-custom" onClick={closeNav}>
                  Certifications
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className="nav-link-custom" onClick={closeNav}>
                  Contact
                </NavLink>
              </NavItem>

              {/* External Socials in Nav */}
              <div className="d-flex align-items-center my-2 my-lg-0 ml-lg-2">
                {socialLinks.github && (
                  <NavLink
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-custom px-2"
                    aria-label="GitHub Profile"
                  >
                    <Icon icon="akar-icons:github-fill" width="20" height="20" />
                  </NavLink>
                )}
                {socialLinks.linkedin && (
                  <NavLink
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-custom px-2"
                    aria-label="LinkedIn Profile"
                  >
                    <Icon icon="akar-icons:linkedin-fill" width="20" height="20" />
                  </NavLink>
                )}
              </div>

              {/* Resume Download in Nav */}
              {greetings.resumeLink && (
                <NavItem className="ml-lg-3 my-2 my-lg-0">
                  <Button
                    className="btn-primary-gradient py-2 px-3 text-sm"
                    href={greetings.resumeLink}
                    download="Akriti_Singh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeNav}
                  >
                    <Icon icon="carbon:document-download" width="18" height="18" />
                    <span>Resume</span>
                  </Button>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
