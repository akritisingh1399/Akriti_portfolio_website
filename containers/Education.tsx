import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "../components/Fade";
import { Icon } from "@iconify/react";

const Education = () => {
  if (!educationInfo || educationInfo.length === 0) return null;

  return (
    <section id="education" className="custom-section">
      <Container>
        <Fade bottom duration={1000}>
          <div className="section-header text-center">
            <span className="section-tag">
              <Icon icon="carbon:education" />
              <span>Academic Foundation</span>
            </span>
            <h2>Education</h2>
            <p className="mx-auto" style={{ maxWidth: "680px" }}>
              Formal engineering and science background specializing in AI, ML, and computational problem solving
            </p>
          </div>

          <Row>
            {educationInfo.map((info, idx) => (
              <Col lg="6" key={idx}>
                <EducationCard {...info} />
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Education;
