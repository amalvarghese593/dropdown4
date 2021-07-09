import React, { useState } from "react";
import img1 from "./india_flag.jpg";

export const Dropdown = () => {
  const initialState = {
    value: "India",
  };

  const pics = {
    pic1: "./india_flag.jpg",
    pic2: img1,
  };

  const morepics = [
    {
      img1,
      country: "Mexico",
    },
  ];

  const [data, setData] = useState(initialState);

  const img2 = require("./india_flag.jpg");

  const handleSubmit = (event) => {
    alert("selected country is: " + data.value);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setData({ ...data, value: event.target.value });
  };

  return (
    <div>
      <img src={img1} alt="Image unavailable" width="50" height="30" />
      <br />
      <img src={img2.default} width="100" height="60" />
      <br />
      <img src={pics.pic1} alt="not found" />
      <br />
      <img src={pics.pic2} width="100" height="60" />
      <form onSubmit={handleSubmit}>
        <label>Ph-No: </label>

        <select value={data.value} onChange={handleChange}>
          <option value="uk">UK (+44){pics.pic2}</option>
          <option value="usa">
            USA (+1)
            <img src={img1} alt="Image unavailable" width="50" height="30" />
          </option>
          <option selectedvalue="india">
            India (+91)
            <img src={img2.default} width="25" height="15" />
          </option>
          {morepics.map((pic) => {
            return (
              <option>
                Mexico
                {pic.img1}
              </option>
            );
          })}
          {morepics.map((pic) => {
            return (
              <option>
                China
                <img src={img1} alt="not found" />
              </option>
            );
          })}
        </select>

        <input type="text" name="name" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
