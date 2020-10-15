import React, { useState, Fragment } from "react";

const CounterComp = () => {
  const [counter, setCounter] = useState(1);
  const increase = () => {
    console.log("Clicked");
    setCounter(counter + 1);
  };

  return (
    <Fragment>
      <h3>First Component {counter} </h3>
      <button onClick={increase}>Increase</button>
    </Fragment>
  );
};

export default CounterComp;
