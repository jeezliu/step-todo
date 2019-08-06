import React from 'react';
import ReactDOM from 'react-dom';
import SortableList from './components/SortableList';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <SortableList />
            </DndProvider>
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
