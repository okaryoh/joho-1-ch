import { ReactNode } from "react";
import { FlexBox } from "../../stories/Common/FlexBox/FlexBox";
import { Paragraph } from "../../stories/Common/Paragraph/Paragraph";
import { ThumbnailAndText } from "../../stories/Common/ThumbnailAndText/ThumbnailAndText";

export interface ToolsAreaProps {
}

export const ToolsArea = ({ }: ToolsAreaProps) => {
  return (
    <>
      <Paragraph text={"具体的な数値を入れることができる！便利ツール"} backgroundColor='#f0f0f0' />
      <FlexBox>
        <ThumbnailAndText
          title='浮動小数点の計算'
          thumbnailSize='small'
          isImage={false}
          linkUrl="/floatingpoint"
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
        <ThumbnailAndText
          title='データベースの正規化'
          thumbnailSize='small'
          isImage={false}
        />
      </FlexBox>

    </>
  );
};
