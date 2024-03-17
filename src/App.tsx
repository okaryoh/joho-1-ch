import React from 'react';
import './style.css';
import { SnsArea } from './home/SnsArea/SnsArea';
import { ToolsArea } from './home/ToolsArea/ToolsArea';
import { ClassArea } from './home/ClassArea/ClassArea';


function App() {
  return (
    <div style={{
      padding: "20px",
    }}>
      <header style={{ fontSize: '40px' }}>
        情報いっちゃんねる
      </header>
      <div className="main">
        <div style={{
          display: 'flex',
          boxSizing: 'border-box'
        }}>
          <div style={{
            width: '70%'
          }}>
            {/* mainカラム 左側 */}
            <ToolsArea />
            <ClassArea />
          </div>
          {/* mainカラム 右側 */}
          <SnsArea />
        </div>
      </div>
    </div>
  );
}

export default App;
