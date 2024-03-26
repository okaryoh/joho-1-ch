import { ReactNode, useEffect, useState } from "react";

export interface FixedBarProps {
  /**
   * 固定する要素
   */
  children: ReactNode
  /**
   * 背景色
   */
  backgroundColor?: string,
  /**
   * 高さ
   */
  heightPx?: number,
}

export const FixedBar = ({
  children,
  backgroundColor,
  heightPx,
}: FixedBarProps) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: backgroundColor || 'black',
      padding: '10px 0',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      display: 'block',
      height: `${heightPx || 50}px`,
    }}>
      {children}
    </div >
  );
};
