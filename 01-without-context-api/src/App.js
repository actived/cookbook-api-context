import AddNewRecipeForm from "./components/AddNewRecipeForm";
import RecipesList from "./components/RecipesList";
import { useState } from "react";

let nextRecipeId = 1;

const App = () => {
    const [recipes, setRecipes] = useState([]);

    /**
     * Callback when user add new recipe into recipes list
     * @param recipe
     */
    const onAddRecipe = (recipe) => {
        const newRecipe = {...recipe, id: nextRecipeId++};
        console.log('new recipe added !', newRecipe);
        setRecipes([...recipes, newRecipe]);
    }

    /**
     * Callback when user remove recipe into recipes list
     * @param recipeId
     */
    const onRemoveRecipe = (recipeId) => {
        console.log('remove recipe id', recipeId)
        setRecipes([...recipes].filter(recipe => recipe.id !== recipeId));
    }

    return (
        <div style={{margin: 10}}>
            <h2>My super cookbook</h2>

            {/*  Form for adding recipes   */}
            <AddNewRecipeForm onAddRecipe={onAddRecipe} />

            {/*  List of our recipes  */}
            <RecipesList recipes={recipes} onRemoveRecipe={onRemoveRecipe} />

        </div>
    );
}

export default App;
