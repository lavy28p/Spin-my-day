import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/recipe">Recipes</Link>
      <Link to="/books">Books</Link>
    </nav>

  )
}

export default Navbar;