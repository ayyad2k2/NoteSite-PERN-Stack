import React, { Fragment, useState } from "react";

const InputToDo = () => {
  // State Hook
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault(); // Prevents refresh when clicking submit button
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Lorem ipsum dolor </h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Why am I not alligned ?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success mx-2">boop</button>
      </form>
    </>
  );
};

export default InputToDo;
