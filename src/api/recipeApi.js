export const fetchRecipes = async (query) => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php";
  
    try {
      const response = await fetch(`${API_URL}?s=${query}`);
      const data = await response.json();
      return data.meals || []; 
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  };
  