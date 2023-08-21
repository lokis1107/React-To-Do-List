import React from "react";

const Display = (props) => {
  return (
    <div onClick={() => props.deleteIem(props.id)}>
      <li className="font-bold text-xl">{props.text}</li>
    </div>
  );
};

export default Display;
