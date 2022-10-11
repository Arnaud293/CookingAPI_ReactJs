import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {

    const [mealsData, setMealsData] = useState([]);
    const [searchingForMeal, setSearchingForMeal] = useState('');

    const getMeals = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchingForMeal).then((res) => setMealsData(res.data.meals));
        
    }

    useEffect (() => {
        getMeals();
        console.log(mealsData)
    }, [searchingForMeal])
    

    return (
        <div>
            <h1>Cooking With React</h1>
            <input type="text" onChange={(e) => setSearchingForMeal(e.target.value)} />
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