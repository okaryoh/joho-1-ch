import { ReactNode } from "react";

export interface SnsAreaProps {
}

export const SnsArea = ({ }: SnsAreaProps) => {
  return (
    <div style={{
      maxHeight: 300
    }}>
      <a className="twitter-timeline" data-lang="ja" data-width="400" data-height="400" href="https://twitter.com/tohoku_joho_1ch?ref_src=twsrc%5Etfw">Tweets by tohoku_joho_1ch</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
};
