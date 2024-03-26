import { ReactNode } from "react";
import { SnsArea } from "./SnsArea/SnsArea";
import { Link } from "react-router-dom";
import { FixedBar } from "../stories/Common/FixedBar/FixedBar";

export interface HomeProps {
  children: ReactNode
}

export const Home = ({ children }: HomeProps) => {
  return (
    <div style={{
      padding: "20px",
      marginTop: "50px",
    }}>
      <FixedBar backgroundColor="rgb(124, 209, 194, 0.5)">
        <header style={{
          fontSize: '40px',
          margin: '0px 0px 0px 15px',
        }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: 'black',
            fontWeight: '900',
          }}>情報いっちゃんねる
            <span style={{
              fontSize: '20px',
              backgroundColor: '#44ADA1',
              color: 'white'
            }}>
              β版 ~開発中!~
            </span>
          </Link>
        </header>
      </FixedBar>
      <p style={{ backgroundColor: '#f0f000' }}>現在開発途中です！思った動作にならない場合がございますのでご注意ください！お問い合わせは <a href="https://twitter.com/tohoku_joho_1ch">こちら</a> まで。</p>
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
