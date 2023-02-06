import React, {useState} from "react";

function InputArea(props){
    const [inputText, setinputText] = useState("");

    function handleChange(event){
        const val = event.target.value;
        setinputText(val);
    }

    return (
        <div className="form">
            <input 
                type="text"
                placeholder="Write something"
                onChange={handleChange}
                value={inputText}
            />
            <button 
                onClick={() => {
                    props.onAdd(inputText);
                    setinputText("");
                }}
            >
            <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;