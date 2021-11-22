import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';


const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;


const NewsList = ( {category} ) => {
  const [articles, setArticles] = useState(null);
  // 요청이 대기 중일 때는 loading 이 ture, 요청이 끝나면 false .
  const [loading, setLoading] = useState(false);
  // 처음 렌더링 된 후에 API 요청할거니까 두번째 인자로 빈 배열 적어주기.
  // 주의 : useEffect 자체에 async 사용 불가. 
  // c왜 ? 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에는 어떠한 작업을 수행하고 싶다면, 
  // 반환해야하는 값이 뒷정리 함수이기 때문. 따라서 내부에서 async 함수를 따로 만들어 주어야 함.
  useEffect(() => {
    const fetchData = async () => {
        // API 요청 완료전 loading true.
      setLoading(true);
      // API 요청 
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a4a7aca69d614cf0a5944c3ec606db96`,
        );
        // articles 의 값을 API 요청으로 받아온 배열로 설정해줌.
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
     //  요청이 끝나면 loading false
      setLoading(false);
    };

    // 내부에 만들어준 fetchData 함수 실행
    fetchData();
  }, [category]);


  //  요청이 완료전, 즉 loading 값이 true 이면 해당 UI 띄우기
  if (loading) {
    return <NewsListBlock>로딩중....</NewsListBlock>;
  }
  // 아직 article 값이 설정되지 않았을 때. 왜 ? null 값을 조회하지 않으면, 아직 데이터가 없을 때 
  // 즉, null 일때는 map 함수가 없기 때문에 렌더링 과정에서 오류가 발생해 제대로 렌더링이 이루어지지 않는다. 
  // 꼭!! article 값이 비어있는지 없는지 검사를 해주자
  if (!articles) {
    return null;
  }
  return (
    //   article 값이 유효할 때
    <NewsListBlock>
      {/* 배열을 map 을 돌려서 하나하나 담기 */}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;