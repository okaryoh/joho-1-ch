interface ParagraphProps {
  /**
   * 背景色
   */
  backgroundColor?: string;
  /**
   * 文字色
   */
  color?: string
  /**
   * ラベルの文字
   */
  text: string;
  /** フォントサイズ */
  fontSizePx?: number;
  /**
   * 角丸
   */
  borderRadius?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Paragraph = ({
  backgroundColor,
  color = '#000000',
  borderRadius,
  fontSizePx = 22,
  text
}: ParagraphProps) => {
  return (
    <div
      className={'Paragraph'}
      style={{
        backgroundColor,
        color,
        borderRadius,
        padding: '5px',
        margin: '5px',
        fontSize: `${fontSizePx}px`,
        width: "100%"
      }}
    >
      {text}
    </div>
  );
};
