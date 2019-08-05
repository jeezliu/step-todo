import * as React from 'react';

export interface StepProps {
  title: string;
  description: React.Component | string;
}
export const Step: React.FC<StepProps> = ({
  title,
  description
}) => {
  return (
    <div>
      <div className="title">{title}</div>
      <div className="decoration">
        {description}
      </div>
      <div className="description">{description}</div>
    </div>
  );
}