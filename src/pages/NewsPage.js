import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const NewsPage = ({match}) => {

    // match.params.category가 false이면 all로
    const category = match.params.category || 'all';
    return (
        <div>
            <Navbar/>
            <Categories/>
            <NewsList category={category}/>
        </div>
    );
};

export default NewsPage;