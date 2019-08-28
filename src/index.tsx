import React from 'react';
import ReactDOM from 'react-dom';
import SortableList from './components/SortableList';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Steps, { Step } from './components/Steps';
import { Preview } from './components/Markdown';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <SortableList />
      </DndProvider>
      <Steps>
        <Step title="Finished" description={<textarea />} />
        <Step title="Finished" description={<Preview value="## haha" />} />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
