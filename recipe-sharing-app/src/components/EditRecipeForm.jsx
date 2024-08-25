import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const { recipes, updateRecipe } = useRecipeStore();
  const recipeToEdit = recipes.find(recipe => recipe.id === recipeId);

  const [editedTitle, setEditedTitle] = useState(recipeToEdit.title);
  const [editedDescription, setEditedDescription] = useState(recipeToEdit.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipeToEdit, title: editedTitle, description: editedDescription });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
      <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;