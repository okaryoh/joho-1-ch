interface LabelProps {
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
  label: string;
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
export const Label = ({
  backgroundColor,
  color = '#000000',
  borderRadius,
  fontSizePx = 15,
  label
}: LabelProps) => {
  return (
    <span
      className={'label'}
      style={{ backgroundColor, color, borderRadius, padding: '5px', fontSize: `${fontSizePx}px` }}
    >
      {label}
    </span>
  );
};
