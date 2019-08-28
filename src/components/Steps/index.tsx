import React from 'react';
import { StepProps } from './Step';

export { Step } from './Step';

const Steps: React.FC = ({ children }) => {
  const filteredChildren = React.Children.toArray(children).filter(c => !!c);
  return (
    <div className="steps-wrapper">
      {React.Children.map(
        filteredChildren as React.ReactElement<StepProps>[],
        (child: React.ReactElement<StepProps>): React.ReactNode => {
          if (!child) {
            return null;
          }
          const childProps = {
            ...child.props,
          };
          return React.cloneElement(child, childProps);
        }
      )}
    </div>
  );
};
export default Steps;