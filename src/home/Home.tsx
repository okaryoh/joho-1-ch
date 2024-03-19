import { ReactNode } from "react";
import { SnsArea } from "./SnsArea/SnsArea";

export interface HomeProps {
  children: ReactNode
}

export const Home = ({ children }: HomeProps) => {
  return (
    <div style={{
      padding: "20px",
    }}>
      <header style={{ fontSize: '40px' }}>
        情報いっちゃんねる
      </header>
      <div className="main">
        <div style={{
          display: 'flex',
          boxSizing: 'border-box'
        }}>
          <div style={{
            width: '70%'
          }}>
            {/* mainカラム 左側 */}
            {children}
          </div>
          {/* mainカラム 右側 */}
          <SnsArea />
        </div>
      </div>
    </div>
  );
};
