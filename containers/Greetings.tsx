import React from "react";
import { greetings, socialLinks } from "../portfolio";
import { Container, Row, Col, Button } from "reactstrap";
import { Icon } from "@iconify/react";
import Fade from "../components/Fade";

const Greetings = () => {
  return (
    <section id="hero" className="hero-wrapper">
      <div className="hero-bg-glow" />
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg="10" xl="9" className="mb-0">
            <Fade left duration={1000}>
              <div className="hero-role-badge">
                <span className="hero-role-dot" />
                <span>B.Tech CSE (AI & ML) &bull; Rungta College Bhilai</span>
              </div>

              <h1 className="hero-title">
                {greetings.name}
              </h1>

              <div className="hero-headline">
                {greetings.headline || "Data Analyst & MERN Stack Developer"}
              </div>

              <p className="hero-description">
                {greetings.description}
              </p>

              {/* CTAs */}
              <div className="d-flex flex-wrap align-items-center gap-3 hero-btn-wrapper mb-4">
                <Button
                  className="btn-primary-gradient mr-3 mb-2"
                  href="#projects"
                >
                  <Icon icon="carbon:rocket" width="18" height="18" />
                  <span>View My Projects</span>
                </Button>

                {greetings.resumeLink && (
                  <Button
                    className="btn-outline-glass mb-2"
                    href={greetings.resumeLink}
                    download="Akriti_Singh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="carbon:document-download" width="18" height="18" />
                    <span>Download Resume</span>
                  </Button>
                )}
              </div>

              {/* Social Links */}
              <div className="d-flex align-items-center mt-3">
                <span className="text-dim text-sm mr-3 font-weight-500">Connect:</span>
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn-dark"
                    aria-label="GitHub Profile"
                  >
                    <Icon icon="akar-icons:github-fill" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn-dark"
                    aria-label="LinkedIn Profile"
                  >
                    <Icon icon="akar-icons:linkedin-fill" />
                  </a>
                )}
                {socialLinks.email && (
                  <a
                    href={socialLinks.email}
                    className="social-btn-dark"
                    aria-label="Email Me"
                  >
                    <Icon icon="carbon:email" />
                  </a>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Greetings;
