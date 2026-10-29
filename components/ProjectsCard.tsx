import React from "react";
import { Col, Button } from "reactstrap";
import { ProjectType } from "../types/sections";
import { Icon } from "@iconify/react";

const ProjectsCard = ({
  name,
  category,
  desc,
  problemStatement,
  highlights,
  tags,
  github,
  link,
}: ProjectType) => {
  return (
    <Col lg="4" md="6" className="mb-4">
      <div className="dark-card project-card">
        {category && <span className="project-category-tag">{category}</span>}
        <h3 className="project-title">{name}</h3>

        <p className="project-desc">{desc}</p>

        {problemStatement && (
          <div className="project-problem-box">
            <strong className="text-white d-block mb-1">
              <Icon icon="carbon:help" className="mr-1" /> Problem & Objective:
            </strong>
            {problemStatement}
          </div>
        )}

        {highlights && highlights.length > 0 && (
          <div className="mb-3">
            <span className="text-dim text-xs font-weight-700 text-uppercase d-block mb-2">
              Key Architecture & Features:
            </span>
            <ul className="project-highlights-list">
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="project-tags-wrapper">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="project-actions">
          {github ? (
            <Button
              className="btn-outline-glass py-1 px-3 text-sm mr-2"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} GitHub Code`}
            >
              <Icon icon="akar-icons:github-fill" className="mr-1" />
              <span>Source</span>
            </Button>
          ) : null}

          {link ? (
            <Button
              className="btn-primary-gradient py-1 px-3 text-sm"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} Live Demo`}
            >
              <Icon icon="carbon:launch" className="mr-1" />
              <span>Live Demo</span>
            </Button>
          ) : null}

          {!github && !link && (
            <span className="project-status-note">
              <Icon icon="carbon:checkmark-outline" color="#38bdf8" />
              Academic & Analytics Implementation
            </span>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProjectsCard;
