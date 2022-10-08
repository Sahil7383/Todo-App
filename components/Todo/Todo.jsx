import React from "react";
import { mutate } from "swr";

const Todo = ({ todo }) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ data: { id: todo.ref["@ref"].id } }),
  };

  const completeHandler = async (e) => {
    e.preventDefault();
    await fetch("/api/complete-todo", options)
      .then(() => {
        mutate("/api/get-todos");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removeHandler = async (e) => {
    e.preventDefault();
    await fetch("/api/delete-todo", options)
      .then(() => {
        mutate("/api/get-todos");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div style={{ margin: "30px" }}>
      <div className="card" key={todo?.data?.ts}>
        <h5 className="card-title m-3">{todo?.data?.title}</h5>
        <div className="card-body">{todo?.data?.note}</div>
        <div className="m-2">
          <button className="btn btn-primary mx-2" onClick={completeHandler}>
            Complete
          </button>
          <button className="btn btn-primary" onClick={removeHandler}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
