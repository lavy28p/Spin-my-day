import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/recipes"><li>Recipes</li></Link>    
        <div className="dropdown">
          <Link to="/books">
            <div className="dropbtn">
              <li>Books</li>
          </div>  
          </Link> 
          <Link to="/books/new">
            <div className="dropdown-content">
              <li>Add new</li>
            </div>
          </Link>
        </div>     
      </ul>
    </nav>

  )
}

export default Navbar;