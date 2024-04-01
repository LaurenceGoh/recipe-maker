"use client";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import RecipeCard, { RecipeData } from "./RecipeCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Search from "./Search";

const getAllRecipes = async () =>
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => {
      return data.recipes;
    });

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<RecipeData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRecipes = await getAllRecipes();
        setRecipes(fetchedRecipes);
        setFilteredRecipes(fetchedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Search handleChange={handleChange} />

      <Suspense fallback={<div>Loading...</div>}>
        {filteredRecipes.length > 0 ? (
          <>
            <SimpleGrid columns={3} spacing={10}>
              {filteredRecipes.map((recipe: RecipeData, index: number) => (
                <RecipeCard recipe={recipe} key={index} />
              ))}
            </SimpleGrid>
          </>
        ) : (
          <Text as='b' display='flex' textAlign='center'>No Recipes Found.</Text>
        )}
      </Suspense>
    </>
  );
};

export default Recipes;
