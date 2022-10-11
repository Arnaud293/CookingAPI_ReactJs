import React from 'react';
import Card from '../components/Card';
import Search from '../components/Search';

const Home = () => {
    return (
        <div>
            <h1>Cooking With React</h1>
            <Search />
            <div className="cards-container">
                <Card />
            </div>
        </div>
    );
};

export default Home;