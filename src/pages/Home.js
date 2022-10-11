import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import axios from 'axios';

const Home = () => {

    const [mealsData, setMealsData] = useState([]);

    const getMeals = async () => {
        await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((res) => setMealsData(res.data.meals));
        
    }

    useEffect (() => {
        getMeals();
        console.log(mealsData)
    }, [])
    

    return (
        <div>
            <h1>Cooking With React</h1>
            <Search />
            <div className="cards-container">
               {
                mealsData.map((meal) => (
                    <Card meal={meal}/>
                ))
               } 
            </div>
        </div>
    );
};

export default Home;