import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
    return (
        <div className="container">
            <h1 className="text-center">Recipe Sharing App</h1>
            <AddRecipeForm />
            <RecipeList />
        </div>
    );
};

export default App;