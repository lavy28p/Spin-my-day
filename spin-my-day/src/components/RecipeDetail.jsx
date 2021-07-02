import { useParams } from "react-router-dom";

function RecipeDetail(props) {
 
  const params = useParams();
  const recipeToShow = props.recipes.find((recipe) => recipe.id === params.id);
 
  return (
    <section>
      <h1>Detail page</h1>
      <h2>{recipeToShow.fields.name}</h2>
      <img src={`${recipeToShow.fields.image}`} alt={`${recipeToShow.fields.name}`}></img>
      <h2>{recipeToShow.fields.ingredients}</h2>
      <p>{recipeToShow.fields.detail}</p>
    </section>
  );
}

export default RecipeDetail;