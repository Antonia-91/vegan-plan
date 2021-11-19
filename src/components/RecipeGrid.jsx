import { NavLink } from "react-router-dom";

const RecipeGrid = ({recipes, setOneRecipe, limitRecipes}) => {
    
if (limitRecipes) {recipes = recipes.slice(0, 3)};
    
    return (<div className="Recipe-Grid">
        {recipes.map((recipe) => (
            <NavLink
              to='/recept'
              onClick={() => {
              setOneRecipe(recipe.id)
              }}
              key={recipe.id}
            >         
            <figure className="Recipe-Card"
              key={recipe.id}
              >
              <img src={recipe.image} alt={recipe.title} />
              <figcaption>{recipe.title}</figcaption>
            </figure>
            </NavLink>
          ))}
      </div>)}
    

    export default RecipeGrid