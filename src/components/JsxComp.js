import React, { Fragment } from "react";

const JsxComp = () => {
  const temp = 21;

  return (
    <Fragment>
      <h2>¿Hot or Cold?</h2>
      <h4>{temp > 20 ? "Hot" : "Cold"}</h4>
    </Fragment>
  );
};

export default JsxComp;
