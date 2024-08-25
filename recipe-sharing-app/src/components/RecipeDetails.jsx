import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const { recipes, updateRecipe, deleteRecipe } = useRecipeStore();
  const recipe = recipes.find(recipe => recipe.id === recipeId);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = (updatedRecipe) => {
    updateRecipe(updatedRecipe);
    setIsEditing(false);
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {isEditing ? (
        <EditRecipeForm recipeId={recipeId} onSaveChanges={handleSaveChanges} />
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

export default RecipeDetails;