import React from "react";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import { skillsSection } from "../portfolio";
import { Icon } from "@iconify/react";
import Fade from "../components/Fade";

const Skills = () => {
  if (!skillsSection) return null;

  return (
    <section id="skills" className="custom-section">
      <Container>
        <Fade bottom duration={1000}>
          <div className="section-header text-center">
            <span className="section-tag">
              <Icon icon="carbon:skill-level-advanced" />
              <span>Technical Expertise</span>
            </span>
            <h2>{skillsSection.title}</h2>
            <p className="mx-auto" style={{ maxWidth: "680px" }}>
              {skillsSection.subTitle}
            </p>
          </div>

          <Row className="g-4">
            {skillsSection.categories.map((cat, idx) => (
              <Col md="6" lg="4" key={idx} className="mb-4">
                <div className="dark-card skill-category-card">
                  <div className="skill-category-header">
                    <div className="skill-category-icon-box">
                      <Icon icon={cat.icon} />
                    </div>
                    <div>
                      <h4 className="h5 mb-0 font-weight-600">{cat.categoryName}</h4>
                    </div>
                  </div>

                  {cat.description && (
                    <p className="skill-category-desc">{cat.description}</p>
                  )}

                  <div className="skill-badges-grid">
                    {cat.skills.map((skill, sIdx) => {
                      const tooltipId = `skill-${idx}-${sIdx}`;
                      return (
                        <div
                          key={sIdx}
                          id={tooltipId}
                          className="skill-badge"
                        >
                          <Icon icon={skill.iconifyTag} width="18" height="18" />
                          <span>{skill.skillName}</span>
                          <UncontrolledTooltip
                            delay={0}
                            placement="top"
                            target={tooltipId}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
