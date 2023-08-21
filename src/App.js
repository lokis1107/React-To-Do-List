import React, { useState } from "react";
import InputBox from "./components/InputBox";
import Display from "./components/Display";
import Footer from "./components/Footer";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems((pre) => {
      return [...pre, text];
    });
  };

  const deleteIem = (id) => {
    setItems((pre) => {
      return pre.filter((i, index) => {
        return index !== id;
      });
    });
  };

  console.log(items);
  return (
    <div className="items-center p-3 ml-56 mr-56 mt-5">
      <div>
        <h2 className="text-center text-2xl font-bold mt-5">To-Do List</h2>
      </div>
      <div style={{ marginLeft: "30%" }}>
        <InputBox addItem={addItem} />
        <div className="mt-5 ml-3 space-y-2">
          <ul>
            {items.map((item, index) => {
              return (
                <Display
                  text={item}
                  key={index}
                  deleteIem={deleteIem}
                  id={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className="item-center ml-80 mt-11"
        style={{ position: "fixed", bottom: 0, marginTop:10 }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default App;
