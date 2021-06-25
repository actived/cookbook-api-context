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
 * Display recipes list
 * @returns {*}
 * @constructor
 */
const RecipesList = () => {

    const { recipes } = useContext(RecipesContext);

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
                    recipes.length ? recipes.map((recipe, index) => 
                        <RecipeCard 
                            key={index} 
                            recipe={recipe} 
                        />
                    ) : 
                    <i>Your cookbook is empty, start by creating new recipe.</i>
                }
            </div>

        </div>
    );
}

export default RecipesList;