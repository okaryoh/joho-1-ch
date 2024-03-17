import { ReactNode, useEffect } from "react";
import { Paragraph } from "../../stories/Paragraph/Paragraph";

export interface SnsAreaProps {
}

export const SnsArea = ({ }: SnsAreaProps) => {
  // ココナラとXのスクリプトを埋め込む https://begien.com/article/58/view
  const coconalaScript = document.createElement('script');
  coconalaScript.innerHTML = `!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://coconala.com/js/coconala_widget.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'coconala-wjs');`;
  const xScript = document.createElement('script');
  xScript.setAttribute('async', '');
  xScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  xScript.setAttribute('charSet', 'utf-8');

  useEffect(() => {
    if (coconalaScript !== null) {
      const coconalaEle = document.getElementById("coconala");
      coconalaEle?.appendChild(coconalaScript);
    }
    if (xScript !== null) {
      const xEle = document.getElementById("x");
      xEle?.appendChild(xScript);
    }
  })
  // ココナラのスクリプトを埋め込む

  return (
    <div style={{
      marginLeft: '10px',
      padding: '10px',
      width: '30%',
      minHeight: 300,
      // ココナラの大きさ
      minWidth: 320,
      backgroundColor: '#7CD1C2',
    }}>
      <Paragraph text="YouTubeで解説動画上げてます！" backgroundColor='#f0f0f0' />
      <iframe src="https://www.youtube.com/embed/B4oW_ZhhrqI?si=6drIB7t_wuRYddxL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <div id="x">
        <Paragraph text="X(旧Twitter)やってます！" backgroundColor='#f0f0f0' />
        <div>
          <a className="twitter-timeline" data-lang="ja" data-height="400" href="https://twitter.com/tohoku_joho_1ch?ref_src=twsrc%5Etfw">Tweets by tohoku_joho_1ch</a>
        </div>
      </div>
      <div id="coconala">
        <Paragraph text="ココナラでマンツーマン指導やってます！" backgroundColor='#f0f0f0' />
        <a className="coconala-widget" href="https://coconala.com/services/3051246" data-service_id="3051246" data-width="468" data-comment="1" data-invite="1" data-user_id="3877173">
          基本情報技術者・ITパスポートの試験対策をします なぜ？をしっかりと説明し、楽しんでもらえるよう指導します！
        </a>
      </div>
    </div>
  );
};
