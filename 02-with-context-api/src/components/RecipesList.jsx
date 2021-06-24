import RecipeCard from "./RecipeCard";
import RecipesContext from "../contexts/RecipesContext";
import { useContext } from "react";

const recipesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'top',
    marginTop: 15
};

const badgeStyle = {
    color: '#096dd9',
    background: '#e6f7ff',
    borderColor: '#91d5ff',
    borderRadius: 5,
    padding: 3,
    marginLeft: 2,
    fontSize: 14
};

/**
 * Display our recipes list
 * @returns {*}
 * @constructor
 */
const RecipesList = () => {

    const recipesContext = useContext(RecipesContext);
    const { recipes } = recipesContext;

    return (
        <div>
            <h3>
                My recipes
                <span style={badgeStyle}>
                    {recipes.length}
                </span>
            </h3>

            <div style={recipesContainerStyle}>
                {
                    recipes.length ? recipes.map((recipe, index) => {
                        return <RecipeCard key={index} recipe={recipe} />
                    }) : <i>Your cookbook is empty, start by creating new recipe.</i>
                }
            </div>

        </div>
    );
}

export default RecipesList;