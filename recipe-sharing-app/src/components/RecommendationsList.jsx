import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map(recipeId => {
        const recommendedRecipe = useRecipeStore(state =>
          state.recipes.find(recipe => recipe.id === recipeId)
        );

        return (
          <div key={recipeId}>
            <h3>{recommendedRecipe.title}</h3>
            <p>{recommendedRecipe.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendationsList;