import { ReactNode } from "react";

export interface FlexBoxProps {
  /**
   * サムネイル
   */
  children: ReactNode
  /**
   * 横幅(px)
   */
  widthPx?: number
}

export const FlexBox = ({
  children,
  widthPx
}: FlexBoxProps) => {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      width: widthPx !== undefined ? `${widthPx}px` : "100%",
    }}>
      {children}
    </div>
  );
};
