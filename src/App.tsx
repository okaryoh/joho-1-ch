import React from 'react';
import './style.css';
import { Paragraph } from './stories/Paragraph/Paragraph';
import { Label } from './stories/Label/Label';
import { ThumbnailAndText } from './stories/ThumbnailAndText/ThumbnailAndText';
import { FlexBox } from './stories/FlexBox/FlexBox';
import { SnsArea } from './home/SnsArea/SnsArea';


function App() {
  return (
    <div style={{
      padding: "20px",
    }}>
      <header style={{ fontSize: '40px' }}>
        情報いっちゃんねる
      </header>
      <Paragraph text={"具体的な数値を入れることができる！便利ツール"} backgroundColor='#f0f0f0' />
      <Label label={"Comming Soon..."} />
      <FlexBox>
        <ThumbnailAndText
          title='浮動小数点の計算'
          thumbnailSize='small'
          isImage={false}
        />
        <ThumbnailAndText
          title='2進数の計算'
          thumbnailSize='small'
          isImage={false}
        />
        <ThumbnailAndText
          title='IPアドレス'
          thumbnailSize='small'
          isImage={false}
        />
        <ThumbnailAndText
          title='画像の計算'
          thumbnailSize='small'
          isImage={false}
        />
        <ThumbnailAndText
          title='音声の計算'
          thumbnailSize='small'
          isImage={false}
        />
      </FlexBox>
      <Paragraph text={"授業資料"} backgroundColor='#f0f0f0' />
      <Label label={"Comming Soon..."} />
      <Paragraph text={"各種リンク"} backgroundColor='#f0f0f0' />
      <Label label={"Comming Soon..."} />
    </div>
  );
}

export default App;
