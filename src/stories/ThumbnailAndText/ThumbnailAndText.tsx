interface ThumbnailAndTextProps {
  /**
   * サムネイル
   */
  thumbnailImage?: string
  /**
   * タイトル
   */
  title: string;
  /**
   * 説明
   */
  detail?: string;
  /**
   * リンクURL
   */
  linkUrl?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ThumbnailAndText = ({
  thumbnailImage,
  title,
  detail,
  linkUrl,
}: ThumbnailAndTextProps) => {
  return (
    <div style={{
      maxWidth: "350px",
      border: '1px solid black',
      padding: "10px",
      margin: "10px",
    }}>
      <div
        className={'thumbnail'}
        style={{
          minHeight: '200px',
          backgroundColor: "#f0f0f0",
          minWidth: '300px',
          width: "100%"
        }}
      >
        {/* 画像に対応する */}
      </div>
      <div style={{
        fontWeight: 'bold',
        fontSize: '20px',
        padding: '5px 3px',
      }}>
        {linkUrl
          ? <a href={linkUrl}>{title}</a>
          : <a>{title}</a>}
      </div>
      <div style={{
        padding: '5px 3px',
        fontSize: '17px',
      }}>
        {detail}
      </div>
    </div>
  );
};
