import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button onClick={props.reset}>
      {props.text}
    </button>
  );
};

const Application = () => {

  // your code here
  const [name, setName] = useState("");

  const handleInputUser = (e) => setName(e.target.value);
  
  const reset = () => {
    // your code here
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <input value={name} onChange={handleInputUser} placeholder="Type your name"></input>
      <Button text="reset" reset={reset}/>
      {name && <h1>Hello {name}</h1>}
      {!name && ""}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
