import React from "react"
import { Recipe } from './recipe.jsx'
import { IngridientsItems } from './ingridients.jsx'
import { getRecipeFromMistral } from './ai.js';

export default function Form() {
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        const recipeText = await getRecipeFromMistral(ingredients);
        console.log("Recipe from Mistral:", recipeText);
        setRecipe(recipeText);
    }


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngridientsItems
                    ingredients={ingredients}
                    toggleRecipeShown={getRecipe}
                />
            )}

            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}