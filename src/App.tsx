import React from 'react';
import './style.css';
import { ToolsArea } from './home/ToolsArea/ToolsArea';
import { ClassArea } from './home/ClassArea/ClassArea';
import { Home } from './home/Home';


function App() {
  return (
    <Home>
      <ToolsArea />
      <ClassArea />
    </Home>
  );
}

export default App;
