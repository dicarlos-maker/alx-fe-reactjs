import create from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [], // An array to hold recipe objects
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    // Action to add a new recipe
    setRecipes: (recipes) => set({ recipes }), // Action to set the entire recipes array
}));

export default useRecipeStore;