import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [Error, setError] = useState(false);
  const [colorList, setColorList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setColorList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${Error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {colorList.map((colorr, index) => {
          return (
            <SingleColor
              key={index}
              {...colorr}
              index={index}
              hexColor={colorr.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
