import { ReactNode, useState } from "react";

export interface TooltipProps {
  /**
   * ホバーした時に表示される要素
   */
  children: ReactNode
  /**
   * 常時表示される要素
   */
  content: ReactNode
}

export const Tooltip = ({
  children,
  content
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </div>
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            zIndex: 9999,
            minWidth: '100px',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
