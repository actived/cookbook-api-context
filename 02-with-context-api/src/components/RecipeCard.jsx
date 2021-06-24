import { useContext } from "react";
import RecipesContext from "../contexts/RecipesContext";

const cardStyle = {
    border: '1px solid gray',
    padding: 5,
    width: '20%',
    margin: 5
}

/**
 * Card that represent the recipe
 * @param recipe
 * @returns {*}
 * @constructor
 */
const RecipeCard = ({ recipe }) => {
    const { title = "", content = "" } = recipe;
    const { removeRecipe } = useContext(RecipesContext);

    return (
        <div style={cardStyle}>
            <h4><u>Recipe</u>: {title}</h4>

            <u>Ingredients:</u>
            {
                content
                    .split('\n')
                    .map((line, index) => <p key={index}>{line}</p>)
            }

            <button onClick={() => removeRecipe(recipe.id)}>
                Remove
            </button>
        </div>
    );
}

export default RecipeCard;