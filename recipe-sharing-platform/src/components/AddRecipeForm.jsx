import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [steps, setSteps] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!title || !ingredients || !instructions || !steps) {
      alert('Please fill out all fields.');
      return;
    }

    
    const ingredientsArray = ingredients.split('\n').map(ingredient => ingredient.trim()).filter(ingredient => ingredient);

    
    const newRecipe = {
      id: data.length + 1, 
      title,
      summary: '', 
      image: '',  
      ingredients: ingredientsArray,
      instructions,
      steps, 
    };

   
    data.push(newRecipe);

    
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="6"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="instructions">
            Preparation Steps
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="6"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="steps">
            Additional Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="6"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
