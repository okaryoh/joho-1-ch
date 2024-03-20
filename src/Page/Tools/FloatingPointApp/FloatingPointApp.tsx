import React, { useRef, useState } from 'react';
import { dec2bin } from '../../../function/binAndDec';
import { Link } from 'react-router-dom';
import { Normalization, Normalize, getFinalNormalization } from '../../../stories/MathAndInfo/Normalization/Normalization';
import { Bit } from '../../../stories/MathAndInfo/Bit/Bit';


function FloatingPointApp() {
  const [binNum, setBinNum] = useState<number>(0);
  const [normalization, setNormalization] = useState<Normalize | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const convertButtonClick = () => {
    if (inputRef.current !== null) {
      const newValue = Number(inputRef.current.value);
      if (!isNaN(newValue)) {
        const bin = dec2bin(newValue);
        setBinNum(bin);
        setNormalization(getFinalNormalization(bin));
      }
    }
  }

  return (
    <>
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


      {binNum !== 0 && (
        <>
          <div>
            <p>▼2進数に変換する</p>
            <div style={{ marginLeft: '10px' }}>{binNum}</div>
            {/* <Link to="/">2進数の変換がわからない場合はこちら</Link> */}
          </div>

          <div>
            <p>▼正規化する</p>
            <Normalization bin={binNum} />
          </div>

          <div>
            <p>▼ビットに当てはめる</p>
            <div style={{ display: 'flex' }}>
              <div className="sign" style={{ backgroundColor: '#FFF2CC' }}>
                <div>符号(1bit)</div>
                <div>変換する値は<br />{normalization?.sign ? "負" : "正"}の数。</div>
                <div style={{ justifyContent: 'flex-end' }}>
                  <Bit bin={normalization?.sign ? 1 : 0} />
                </div>
              </div>
              <div className="exponent" style={{ backgroundColor: '#D6D6F5' }}>
                <div>指数部(8bit)</div>
                <div>正規化後、指数は{normalization?.exponent}。<br />
                  {normalization?.exponent}+127={(normalization?.exponent || 0) + 127}。
                </div>
                <Bit bin={dec2bin((normalization?.exponent || 0) + 127)} />
              </div>
              <div className="fraction" style={{ backgroundColor: '#E2F0D9' }}>
                <div>仮数部(23bit)</div>
                <div>正規化後、1.xxのxx部分は指数は{String(normalization?.fraction || 0.00).substring(2, 30)}。<br />
                  残りの部分は0で穴埋めすれば良い。
                </div>
                <Bit bin={String(normalization?.fraction || 0.00).substring(2, 30)} numberOfDigits={23} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FloatingPointApp;
