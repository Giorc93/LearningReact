import React, { useState, Fragment } from "react";

const ListComp = () => {
  const [arrNum, setNum] = useState([1, 2, 3, 4, 5]);
  const [number, setNumber] = useState(6);
  const addElm = () => {
    setNumber(number + 1);
    setNum([...arrNum, number]); //Propagation operator ...
    // console.log("click");
  };

  return (
    <Fragment>
      <h2>List</h2>
      <button onClick={addElm}>Add</button>
      {arrNum.map((item, i) => (
        <p key={i}>
          {item} - {i}{" "}
        </p>
      ))}
    </Fragment>
  );
};

export default ListComp;
