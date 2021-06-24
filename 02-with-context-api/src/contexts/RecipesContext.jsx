import React, { useState } from 'react';

let nextRecipeId = 1;

/**
 * We create our recipe context
 * @type {React.Context<{removeRecipe: (function(): *), recipes: [], addRecipe: (function(): *)}>}
 */
const RecipesContext = React.createContext({
    recipes: [],
    addRecipe: (recipe) => console.error("Please implement this function."),
    removeRecipe: (recipeId) => console.error("Please implement this function."),
});


/**
 * We make component for manage business logic between children components and context
 * @param children
 * @returns {*}
 * @constructor
 */
const RecipeContextProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    /**
     * Callback when user add new recipe into recipes list
     * @param recipe
     */
    const addRecipe = (recipe) => {
        const newRecipe = {...recipe, id: nextRecipeId++};
        console.log('new recipe added !', newRecipe);
        setRecipes([...recipes, newRecipe]);
    }

    /**
     * Callback when user remove recipe into recipes list
     * @param recipeId
     */
    const removeRecipe = (recipeId) => {
        console.log('remove recipe id', recipeId)
        setRecipes([...recipes].filter(recipe => recipe.id !== recipeId));
    }


    return (
        <RecipesContext.Provider value={{
            recipes, addRecipe, removeRecipe
        }}>
            {children}
        </RecipesContext.Provider>
    )
}


export default RecipesContext;
export { RecipeContextProvider };