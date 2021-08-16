import React, { useState } from "react";

function UseState() {
  const [inputValue, setInputValue] = useState("Jason");

  let change = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue)
  }

  return (
    <h1>
      <input placeholder="type here..." onChange={change} />
      {inputValue}
    </h1>
  );
}

export default UseState;
