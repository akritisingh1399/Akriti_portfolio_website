import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "../components/Fade";
import { Icon } from "@iconify/react";

const Projects = () => {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="custom-section">
      <Container>
        <Fade bottom duration={1000}>
          <div className="section-header text-center">
            <span className="section-tag">
              <Icon icon="carbon:portfolio" />
              <span>Technical Portfolio</span>
            </span>
            <h2>Featured Projects</h2>
            <p className="mx-auto" style={{ maxWidth: "680px" }}>
              Data analytics pipelines, machine learning systems, and full-stack MERN web platforms
            </p>
          </div>

          <Row className="row-grid">
            {projects.map((project, i) => (
              <ProjectsCard key={i} {...project} />
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Projects;
