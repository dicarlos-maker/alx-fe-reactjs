import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  
  const validate = () => {
    const errors = {};
    if (!title) errors.title = 'Recipe title is required';
    if (!ingredients) errors.ingredients = 'Ingredients are required';
    if (!instructions) errors.instructions = 'Preparation steps are required';
    if (!steps) errors.steps = 'Additional steps are required';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
            className={`w-full p-2 border rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            rows="6"
            required
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="instructions">
            Preparation Steps
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.instructions ? 'border-red-500' : 'border-gray-300'}`}
            rows="6"
            required
          />
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="steps">
            Additional Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            rows="6"
            required
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
