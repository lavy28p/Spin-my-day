import { useParams } from "react-router-dom";

function RecipeDetail(props) {
 
  const params = useParams();
  const recipeToShow = props.recipes.find((recipe) => recipe.id === params.id);
 
  return (
    <section>
      <div className="recipe1">
        <h2>{recipeToShow.fields.name}</h2>
      </div>
      <div className="recipe2">
        <img src={`${recipeToShow.fields.image}`} alt={`${recipeToShow.fields.name}`}></img>
      </div>
      <div className="recipe3">
        <ol>
          <li>{recipeToShow.fields.ingredients}</li>
        </ol>
      </div>
      <div className="recipe4">
        <p>{recipeToShow.fields.detail}</p>
      </div>
      
    </section>
  );
}

export default RecipeDetail;