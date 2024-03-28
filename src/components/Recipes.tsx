import React from "react";
import { Suspense } from "react";
import RecipeCard , { RecipeData } from "./RecipeCard";
import { SimpleGrid } from "@chakra-ui/react";



const Recipes : React.FC = async () => {
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

  const recipes : RecipeData[] = await getAllRecipes();


  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SimpleGrid columns={3} spacing={10}>
        {recipes.map((recipe : RecipeData , index: number) => (
          <RecipeCard recipe={recipe} key={index}/>
        ))}
        </SimpleGrid>
       
      </Suspense>
    </div>
  );
};

export default Recipes;
