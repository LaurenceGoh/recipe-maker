import React from "react";
import { Suspense } from "react";
import RecipeCard from "./RecipeCard";
import RecipeData from "./RecipeCard";

const Recipes = async () => {
  const getAllRecipes = async () =>
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        return data.recipes;
      });

  const searchRecipeByName = async (arg: string) => {
    fetch(`https://dummyjson.com/recipes/search?q=${arg}`).then((res) =>
      res.json()
    );
  };

  const recipes = await getAllRecipes();

  console.log(recipes);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {recipes.map((recipe: typeof RecipeData, index: number) => (
          <div>Name : {recipe.name}</div>
        ))}
      </Suspense>
    </div>
  );
};

export default Recipes;
