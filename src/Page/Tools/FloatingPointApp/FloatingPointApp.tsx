import React, { useRef, useState } from 'react';
import { Home } from '../../../home/Home';


function FloatingPointApp() {
  const [decNum, setDecNum] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const convertButtonClick = () => {
    if (inputRef.current !== null) {
      const newValue = parseInt(inputRef.current.value, 10);
      if (!isNaN(newValue)) {
        setDecNum(newValue);
      }
    }
  }

  return (
    <>
      {decNum}←
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <input type="number" ref={inputRef} />
          <button onClick={convertButtonClick}>変換</button>
        </div>
        <div style={{ marginLeft: '10px' }}>
          <p>符号部( 1bit): 正が0。負が1。</p>
          <p>指数部( 8bit): 正規化の 1.xx × 2y の yの部分を、127で足したもの</p>
          <p>仮数部(23bit): 正規化した小数点以下の部分。足りない部分は0で埋める</p>
        </div>
      </div>
      <div>
        <p>▼2進数に変換する</p>
      </div>
    </>
  );
}

export default FloatingPointApp;
