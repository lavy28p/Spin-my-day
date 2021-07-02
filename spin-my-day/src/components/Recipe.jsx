import { Link } from "react-router-dom";
import "./Recipe.css";

function Recipe(props) {
  const { image, name, } = props.recipe.fields;

  return (
    <div className="container">  
      <div className="imgcontainer">
        <h4 className="name">{name}</h4>
        <Link to={`/recipe/${props.recipe.id}`}><img className="item" src={image} alt={name}/></Link>   
      </div>
    </div>

  );
}

export default Recipe;