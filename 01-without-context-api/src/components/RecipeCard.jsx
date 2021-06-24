const cardStyle = {
    border: '1px solid gray',
    padding: 5,
    width: '20%',
    margin: 5
}

/**
 * Card that represent the recipe
 * @param recipe
 * @param onEditRecipe
 * @param onRemoveRecipe
 * @returns {*}
 * @constructor
 */
const RecipeCard = ({ recipe, onRemoveRecipe }) => {
    const { title = "", content = "" } = recipe;

    return (
        <div style={cardStyle}>
            <h4><u>Recipe</u>: {title}</h4>

            <u>Ingredients:</u>
            {
                content
                    .split('\n')
                    .map((line, index) => <p key={index}>{line}</p>)
            }

            <button onClick={() => onRemoveRecipe(recipe.id)}>
                Remove
            </button>
        </div>
    );
}

export default RecipeCard;