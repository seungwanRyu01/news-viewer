import React from 'react';
// NavLink import
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const categories = [
  { name: 'all', text: '전체 뉴스' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '헬스' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  background-color: yellow;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;





// html 요소가 아닌 컴포넌트에 사용할 때는 컴포넌트를 괄호로 감쌈.
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  // active 클래스의 스타일 정의 
  &.active{
      font-weight: 600;
      border-bottom: 2px solid #ccccff;
      color: #ccccff;
      &:hover {
        color: #6495ed;
        border-bottom: 2px solid #6495ed;
      }
    }

  & + & {
    margin-left: 1rem;
  }
`;


// const Categories = ({ onSelect, category }) => {
//   return (
//     <CategoriesBlock>
//       {categories.map((c) => (
//         <Category
//           key={c.name}
//         // 현재 category 값이 해당 name 과 같으면 true, 아니면 false 반환
//           active={category === c.name}
//         //   해당 카테고리를 클릭했을 때 해당 카테고리의 name 을 onSelcet 의 파라미터로 가져가서 카테고리 값을 업데이트 시킴.
//           onClick={() => onSelect(c.name)}
//         >
//           {c.text}
//         </Category>
//       ))}
//     </CategoriesBlock>
//   );
// };





const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          //  NavLink 에서는 링크가 활성화 되었을 때 active 이름의 class props 로 설정해주면 해당 클래스의 스타일이 적용됨.
          activeClassName="active"
          //   /가 true 여야 각자 정확한 경로에만 스타일을 적용함. 해당 값이 false 면 다른 카테고리에서도 전부 중복된 active 클래스가 나타남.
          exact={c.name === 'all'}
          //  all 이면 path는 '/' 나머지는 카테고리에 따라서 /카테고리이름 으로 경로 지정
          to={c.anme === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};


export default Categories;




