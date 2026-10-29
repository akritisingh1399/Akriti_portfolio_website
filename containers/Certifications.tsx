import React from "react";
import { certifications, achievements } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "../components/Fade";
import { Icon } from "@iconify/react";

const Certifications = () => {
  return (
    <section id="certifications" className="custom-section">
      <Container>
        <Fade bottom duration={1000}>
          {/* Section Header */}
          <div className="section-header text-center">
            <span className="section-tag">
              <Icon icon="carbon:badge" />
              <span>Verified Qualifications</span>
            </span>
            <h2>Certifications & Achievements</h2>
            <p className="mx-auto" style={{ maxWidth: "680px" }}>
              Industry credentials across Full-Stack Web Development, Data Science, and Analytics
            </p>
          </div>

          {/* Certifications Grid */}
          <Row className="g-4 mb-5">
            {certifications.map((cert, idx) => (
              <Col md="4" key={idx} className="mb-4 mb-md-0">
                <div className="dark-card cert-card">
                  <div className="d-flex align-items-center mb-3">
                    <div className="contact-item-icon mr-3">
                      <Icon icon="carbon:certificate" width="22" height="22" />
                    </div>
                    <div>
                      <div className="cert-issuer">{cert.issuer}</div>
                      <div className="cert-date">{cert.date}</div>
                    </div>
                  </div>

                  <h4 className="h5 text-white font-weight-600 mb-3">{cert.title}</h4>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="d-flex flex-wrap gap-1">
                      {cert.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="project-tag mr-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {cert.link && (
                    <div className="mt-3">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gradient font-weight-600"
                      >
                        Verify Credential &rarr;
                      </a>
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>

          {/* Achievements Highlight */}
          {achievements && achievements.length > 0 && (
            <Row>
              <Col lg="12">
                <div className="dark-card achievement-card">
                  <Row className="align-items-center">
                    <Col md="4" className="text-center text-md-left mb-3 mb-md-0">
                      <span className="achievement-stat-number">
                        {achievements[0].highlight}
                      </span>
                      <h4 className="h5 text-white font-weight-700 mb-0">
                        {achievements[0].title}
                      </h4>
                    </Col>
                    <Col md="8">
                      <div className="d-flex align-items-start">
                        <div className="contact-item-icon mr-3 d-none d-md-flex">
                          <Icon icon="carbon:code-reference" width="24" height="24" />
                        </div>
                        <div>
                          <h5 className="text-gradient font-weight-600 mb-2">
                            Algorithmic Problem Solving Foundation
                          </h5>
                          <p className="text-muted text-sm mb-0" style={{ lineHeight: "1.7" }}>
                            {achievements[0].description} Consistent daily practice to develop rigorous problem-solving intuition, time-space complexity optimization, and clean algorithmic code.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          )}
        </Fade>
      </Container>
    </section>
  );
};

export default Certifications;
