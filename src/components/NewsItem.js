import React from 'react';
import styled from 'styled-components';

const NewsItemblock = styled.div`
  display: flex;

  .thumnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0%.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemblock>
      {urlToImage && (
        <div className="thumnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumnnail" />
          </a>
          
        </div>
      )}

      <div className="contents">
        <h2>
            {/* black option 해당 링크를 새 탭에서 열게 함. 기본값은 self. 현재 프레임에 열기 */}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemblock>
  );
};

export default NewsItem;