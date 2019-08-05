import * as React from 'react';

interface StepsProps {
  title: string;
}
export const Steps: React.FC<StepsProps> = ({
  title,
  children
}) => {
  const filteredChildren = React.Children.toArray(children).filter(c => !!c);
  return (
    <div className="steps-container">
      {React.Children.map(filteredChildren, (child, index) => {
      if (!child) {
        return null;
      }
      const childProps = {
        ...child.props
      };
      return React.cloneElement(child, childProps);
    })}
    </div>
  )
}
