import { useContext, useState } from "react";
import RecipesContext from "../contexts/RecipesContext";

const formStyle = {
    border: '1px solid black',
    width: 250,
    margin: 10,
    padding: 5
}

const inputStyle = {
    width: '90%'
}

/**
 * Form that used by user for adding new recipe to the cookbook
 * @returns {*}
 * @constructor
 */
const AddNewRecipeForm = () => {

    const [recipe, setRecipe] = useState({
        title: '',
        content: ''
    });

    const { addRecipe } = useContext(RecipesContext);

    /**
     * When user submit his recipe :)
     */
    const onSubmit = (event) => {
        event.preventDefault();

        //call our callback for editing our recipes states
        // onAddRecipe(recipe);
        addRecipe(recipe);

        //reset recipe after it's created
        setRecipe({ title: '', content: '' });
    }

    return (
        <form style={formStyle} onSubmit={onSubmit}>

            <div>
                <label style={{ display: 'block' }} htmlFor={"title"}>Title: </label>
                <input type={"text"}
                       id={"title"}
                       style={inputStyle}
                       value={recipe.title}
                       onChange={({ target }) => setRecipe({ ...recipe, title: target.value })}
                />
            </div>


            <div>
                <label style={{ display: 'block' }} htmlFor={"content"}>Recipe: </label>
                <textarea id={"content"} value={recipe.content} rows={5}
                          style={inputStyle}
                          onChange={({ target }) => setRecipe({ ...recipe, content: target.value })}
                />
            </div>


            <button type={"submit"}>
                Add recipe
            </button>
        </form>
    );
}

export default AddNewRecipeForm;