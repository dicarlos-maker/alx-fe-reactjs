import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import data from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe List</h1>
      <Link to="/add-recipe">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4">
          Add New Recipe
        </button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-2 block">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
