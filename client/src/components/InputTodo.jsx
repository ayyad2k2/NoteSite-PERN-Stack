import React, { Fragment } from "react";

const InputToDo = () => {
  return (
    <>
      <h1 className="text-center mt-5">Lorem ipsum dolor </h1>
      <form className="d-flex mt-5" action="">
        <label for="" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          placeholder="Why am I not alligned ?"
        />
        <button className="btn btn-success mx-2">boop</button>
      </form>
    </>
  );
};

export default InputToDo;
