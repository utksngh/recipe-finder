import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md mb-5 overflow-hidden">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.strMeal}</h3>
        <a
          href={recipe.strYoutube || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
