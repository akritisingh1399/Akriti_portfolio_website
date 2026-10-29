import React, { ReactNode } from "react";

type FadeProps = {
  children: ReactNode;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
};

const Fade = ({ children, className }: FadeProps) => {
  return <div className={`fade-in-section ${className || ""}`}>{children}</div>;
};

export default Fade;
