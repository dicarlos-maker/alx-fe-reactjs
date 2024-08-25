import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { recipeId } = useParams(); 
  const navigate = useNavigate();

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const handleDelete = () => {
   
    useRecipeStore(state => state.deleteRecipe(recipeId));
    navigate('/recipes');
  };


  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
};

export default RecipeDetails;