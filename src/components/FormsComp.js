import React, { Fragment, useState } from "react";

const FormComp = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: [event.target.value],
    });
  };

  return (
    <Fragment>
      <h1>Form</h1>
      <form className="row">
        <div className="col-md-3">
          <input
            placeholder="Name"
            className="form-control"
            type="text"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            placeholder="Last Name"
            className="form-control"
            type="text"
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default FormComp;
