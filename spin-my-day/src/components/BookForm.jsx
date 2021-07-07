import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseUrl, config } from "../services";
import "./BookForm.css";

function BookForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      description,
      image,
    };
    await axios.post(`${baseUrl}/books`, { fields: newBook }, config);
    props.setToggleFetch((curr) => !curr);
    setTimeout(() => {
      history.push("/books");
    }, 1000);
  }


  return (
    <form className="form-class" onSubmit={handleSubmit}>
      <div className="heading">
        <h2>Add Me To Read List!</h2> 
      </div>
      <div className="form1">
        <label>Book Title:</label><br/>
        <input id="title" type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title"/><br/>
      </div>
      <div className="form2">
        <label>Author:</label><br/>
        <input id="author" type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Author Name"/><br/>
      </div>
      <div className="form3">
        <label>Description:</label><br/>
        <input id="description" type="text" onChange={(e) => setDescription(e.target.value)} value={description} placeholder="About Book"/><br/>
      </div>
      <div className="form4">
        <label>BookCover:</label><br/>
        <input id="image" type="text" onChange={(e) => setImage(e.target.value)} value={image} placeholder="Cover Image"/><br/>
      </div>
      <div className="btn"> 
        <button>Add To List</button>
      </div>    
    </form>
  );
}

export default BookForm;