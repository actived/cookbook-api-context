import AddNewRecipeForm from "./components/AddNewRecipeForm";
import RecipesList from "./components/RecipesList";
import { RecipeContextProvider } from "./contexts/RecipesContext";

const App = () => {
    return (
        <div style={{margin: 10}}>
            <h2>My super cookbook</h2>

            <RecipeContextProvider>

                {/*  Form for adding recipes   */}
                <AddNewRecipeForm />

                {/*  List of our recipes  */}
                <RecipesList />

            </RecipeContextProvider>
        </div>
    );
}

export default App;