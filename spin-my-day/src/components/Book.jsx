import "./Book.css";

function Book(props) {
  
  const { title, author, image, description } = props.book.fields;

  return (
      <section>      
        <div className="bookwrapper">
          <div className="column-one">
          <img src={image} alt={title}/>
          </div>
          <div className="column-two">
            <h3>{title}</h3>
            <p>by {author}</p>
            <p className ="description">{description}</p>
          </div>
        </div>
       
      </section>
  );
}

export default Book;