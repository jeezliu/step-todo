import * as React from 'react';
import Steps from 'antd/lib/steps';
import 'antd/lib/steps/style/index.css';

import Container from './Container';

const Step = Steps.Step;

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <div>
    <h1>
      Hello from {props.compiler} and {props.framework}!
  </h1>
    <Container />
    <Steps direction="vertical" current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  </div>
);
