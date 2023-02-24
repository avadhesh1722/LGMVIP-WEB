import React from "react";
import { useState } from "react";
const AddTodo = ({ addTodo }) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description is not added");
    } else {
      addTodo(title, desc);
      settitle("");
      setdesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add a todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
