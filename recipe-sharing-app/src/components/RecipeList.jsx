import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {recipes.map(recipe => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;