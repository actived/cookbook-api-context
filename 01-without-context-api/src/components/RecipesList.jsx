import RecipeCard from "./RecipeCard";

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
 * @param recipes
 * @param onRemoveRecipe
 * @returns {*}
 * @constructor
 */
const RecipesList = ({ recipes = [], onRemoveRecipe }) => {
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
                        return <RecipeCard key={index} recipe={recipe} onRemoveRecipe={onRemoveRecipe}/>
                    }) : <i>Your cookbook is empty, start by creating new recipe.</i>
                }
            </div>

        </div>
    );
}

export default RecipesList;