import React, { useState } from "react";

const InputBox = (props) => {
  const [item, setItem] = useState("");

  const handleStore = (e) => {
    setItem(e.target.value);
  };
  const handleClick = () => {
    props.addItem(item);
    setItem("");
  };
  return (
    <div className="items-center">
      <input
        placeholder="Take a notes"
        onChange={handleStore}
        className="mt-10 border p-3 rounded-2xl w-80"
        value={item}
      />
      <button className="ml-5 p-3" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default InputBox;
