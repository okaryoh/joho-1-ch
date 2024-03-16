import React from 'react';
import './style.css';
import { Paragraph } from './stories/Paragraph/Paragraph';
import { Label } from './stories/Label/Label';


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Paragraph text={"情報いっちゃんねる"} fontSizePx={40} />
      <Paragraph text={"便利ツール"} backgroundColor='#f0f0f0' />
      <Label label={"Comming Soon..."} />
      <Paragraph text={"授業資料"} backgroundColor='#f0f0f0' />
      <Label label={"Comming Soon..."} />
      <Paragraph text={"各種リンク"} backgroundColor='#f0f0f0' />
      <Label label={"Comming Soon..."} />
    </div>
  );
}

export default App;
