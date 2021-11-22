import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';


const NewsPage = ({match}) => {

    // match.params.category가 false이면 all로
    const category = match.params.category || 'all';
    return (
        <div>
            <Categories/>
            <NewsList category={category}/>
        </div>
    );
};

export default NewsPage;