import * as React from 'react';
import './index.css';

export interface StepProps {
  title: string;
  description: React.ReactNode;
}
export const Step: React.FC<StepProps> = ({
  title,
  description
}) => {
  return (
    <div className="step-container">
      <div className="step-title">{title}</div>
      <div className="step-decoration">
        <div className="vertical-rect"></div>
        <div className="double-circle"></div>
      </div>
      <div className="step-description">{description}</div>
    </div>
  );
}