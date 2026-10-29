import React from "react";
import { Container, Row, Col } from "reactstrap";
import { about } from "../portfolio";
import { Icon } from "@iconify/react";
import Fade from "../components/Fade";

const About = () => {
  if (!about) return null;

  return (
    <section id="about" className="custom-section">
      <Container>
        <Fade bottom duration={1000}>
          <div className="section-header text-center">
            <span className="section-tag">
              <Icon icon="carbon:user-avatar-filled-alt" />
              <span>Background & Focus</span>
            </span>
            <h2>{about.title}</h2>
            <p className="mx-auto" style={{ maxWidth: "680px" }}>
              {about.subtitle}
            </p>
          </div>

          <Row className="mb-5 align-items-center">
            <Col lg="12">
              <div className="dark-card p-4 p-md-5">
                <p className="lead text-secondary mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  {about.description}
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            {about.highlights.map((item, index) => (
              <Col md="6" lg="3" key={index} className="mb-4 mb-lg-0">
                <div className="about-metric-card">
                  <div className="about-metric-icon">
                    <Icon icon={item.icon} width="32" height="32" />
                  </div>
                  <h5 className="font-weight-600 mb-2" style={{ fontSize: "1rem" }}>
                    {item.title}
                  </h5>
                  <p className="text-muted text-sm mb-0">
                    {item.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default About;
