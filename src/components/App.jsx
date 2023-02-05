import React, {useState} from "react";

function App() {

  const [inputText, setinputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const val = event.target.value;
    setinputText(val);
  }

  function handleClick(){
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text"
          placeholder="Write something"
          onChange={handleChange}
          value={inputText}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem =>
            <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;