import React, { useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NewsPage from './pages/NewsPage';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

function App() {

  // // category 값을 설정
  // const [ category, setCategory ] = useState('all');
  // // 선택했을 때 카테고리 값을 받아와서 업데이트 해줄 예정
  // const onSelect = useCallback( category => setCategory(category), []);

  return <Route path="/:category?" component={NewsPage} />;
  // (
  //   <>
  //     <Categories category={ category } onSelect={ onSelect }/>
  //     <NewsList category={ category }/>
  //   </>
  // )
}

export default App;