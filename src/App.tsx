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
      <Paragraph text={"授業資料"} backgroundColor='#f0f0f0' />
      <Label label={"Comming Soon..."} />
      <Paragraph text={"各種リンク"} backgroundColor='#f0f0f0' />
      <Label label={"Comming Soon..."} />
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
          </div>
          <div style={{
            width: '30%',
            border: '1px solid #000'
          }}>
            {/* mainカラム 右側 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
