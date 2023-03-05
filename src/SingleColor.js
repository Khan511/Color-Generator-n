import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const setTime = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(setTime);
  }, [alert]);
  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb);
  const hex = `#${hexColor}`;

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      <p>{alert && `Copied to ClipBoard`}</p>
    </article>
  );
};

export default SingleColor;
