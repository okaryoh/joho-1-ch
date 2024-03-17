interface ThumbnailAndTextProps {
  /**
   * サムネイル
   */
  thumbnailImage?: string;
  /**
   * サムネイル画像の有無
   */
  isImage?: boolean;
  /**
   * サムネイルの大きさ
   */
  thumbnailSize?: 'small' | 'medium' | 'large';
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
  isImage = true,
  thumbnailSize,
  title,
  detail,
  linkUrl,
}: ThumbnailAndTextProps) => {
  return (
    <div style={{
      width: `${thumbnailSize === undefined || thumbnailSize === 'medium'
        ? 300
        : thumbnailSize === 'small'
          ? 200
          : 400
        }px`,
      border: '1px solid black',
      padding: "10px",
      margin: "10px",
    }}>
      {isImage &&
        <div
          className={'thumbnail'}
          style={{
            backgroundColor: "#f0f0f0",
            width: `${thumbnailSize === undefined || thumbnailSize === 'medium'
              ? 300
              : thumbnailSize === 'small'
                ? 200
                : 400
              }px`,
            height: `${thumbnailSize === undefined || thumbnailSize === 'medium'
              ? 300
              : thumbnailSize === 'small'
                ? 200
                : 400
              }px`,
          }}
        >
          {/* 画像に対応する */}
        </div>
      }
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
