import React, { Fragment } from "react";
import { useForm } from "react-hook-form"; //Importing react-hook-form

const FormHook = () => {
  const { register, errors, handleSubmit } = useForm(); //Inst. useForm()

  const onSubmit = (data, e) => {
    //Catching data from form and setting event e
    console.log(data);
    e.target.reset(); //reseting fields
  };

  return (
    <Fragment>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="title"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Must have a title" },
          })}
        />
        <span className="text-danger text-small d-block mn-2">
          {errors?.title?.message}
        </span>
        <button className="btn btn-primary">Send</button>
      </form>
    </Fragment>
  );
};

export default FormHook;
