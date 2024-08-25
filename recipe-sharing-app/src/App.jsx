import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList'; 

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="text-2xl font-semibold">Recipe Sharing App</h1>
        <AddRecipeForm />
        <SearchBar /> {/*  Search bar  */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
        <FavoritesList /> {/* Favorites list  */}
        <RecommendationsList /> {/* Recommendation list*/}
      </div>
    </Router>
  );
};

export default App;