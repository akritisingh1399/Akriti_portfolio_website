import React from "react";
import { EducationType } from "../types/sections";
import { Icon } from "@iconify/react";

const EducationCard = ({
  schoolName,
  subHeader,
  duration,
  location,
  desc,
  descBullets,
}: EducationType) => {
  return (
    <div className="dark-card edu-timeline-card mb-4">
      {duration && <span className="edu-year-badge">{duration}</span>}
      <h4 className="h5 text-white font-weight-700 mb-1">{schoolName}</h4>
      <div className="text-gradient font-weight-600 mb-2">{subHeader}</div>

      {location && (
        <div className="text-dim text-xs mb-3 d-flex align-items-center">
          <Icon icon="carbon:location" className="mr-1" />
          <span>{location}</span>
        </div>
      )}

      {desc && <p className="text-muted text-sm mb-3">{desc}</p>}

      {descBullets && descBullets.length > 0 && (
        <ul className="project-highlights-list mb-0">
          {descBullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationCard;
