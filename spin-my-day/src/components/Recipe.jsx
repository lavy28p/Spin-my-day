import { Link } from "react-router-dom";
import "./Recipe.css";

function Recipe(props) {
  const { image, name, } = props.recipe.fields;

  return (
      <div className="tile">  
      <div className="image-gallery">
        {/* <h4 className="name">{name}</h4> */}
        <Link to={`/recipes/${props.recipe.id}`}><img className="img" src={image} alt={name}/></Link>   
      </div>
    </div>
    
  );
}

export default Recipe;