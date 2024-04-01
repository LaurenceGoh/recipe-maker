export interface RecipeData {
    key: number;
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
  }

  const getAllRecipes = async (): Promise<RecipeData[]> => {
    const response = await fetch("https://dummyjson.com/recipes");
    const recipes = await  response.json();
    return recipes.recipes;
  };
  let data: RecipeData[] = [];

  getAllRecipes().then(recipes => {
    data = recipes
  });


  export { data };
