import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import RecipeDetail from "./components/RecipeDetail";
import Book from "./components/Book";
import { baseUrl, config } from "./services";
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [books, setBooks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const recipesResp = await axios.get(`${baseUrl}/recipes`, config);
      setRecipes(recipesResp.data.records);

      const booksResp = await axios.get(`${baseUrl}/books`, config);
      setBooks(booksResp.data.records);
    }
    fetchData();
  }, [toggleFetch]);


 // make a state to represent the current angle
 const [angle, setAngle] = useState(0);
 // make a state to represent how many spins the circle has had
 const [spins, setSpins] = useState(1);
 
 // make a useEffect that says any time the angle changes, we increase the spins by one
 useEffect(() => {
   setSpins((curr) => curr + 1);
 }, [angle]); 

 const spin = () => {
   // gets a random number from 0-5 and multiplies it by 60 (to create our new angle)
   const newAngle = Math.floor(Math.random() * 6) * 60;
   // create a variable momentum which is 1440 (four full spins) times the amount of times we've spun so far, so we go forward no matter what
   const momentum = 1440 * spins;
   // set our angle state to our new angle + our momentum
   setAngle(newAngle + momentum);
 }

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h1>What's My Day Like!!</h1>
          <div className="wheel" >
            <div id="options" className="options" style={{ transform: `rotate(${angle}deg)` }}>    
              <div className="sections">
                <span className="selection1"><b>Do A Workout</b></span>
                <span className="selection2"><b>Write a Blog</b></span>
                <span className="selection3"><b>Try A Recipe</b></span>
                <span className="selection4"><b>Enjoy Your Rest Day</b></span>
                <span className="selection5"><b>Bummer!</b></span>
                <span className="selection6"><b>Read A Book</b></span>
                <span className="selection7"><b>Go Shopping</b></span>
                <span className="selection8"><b>Bummer!</b></span>
                </div>
            </div>
          </div>
        <button className="spin" onClick={spin}>Spin it!</button>
      </Route>

      <Route exact path="/recipe">
        <main>
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </main>
      </Route>

      <Route path="/recipe/:id">
        <RecipeDetail recipes={recipes} />
      </Route>

      <Route path="/books">
        <main>
          {books.map((book) => (
            <Book key={book.id} book={book}/>
          ))}

        </main>
      </Route>
    </div>  
  );
}

export default App;




