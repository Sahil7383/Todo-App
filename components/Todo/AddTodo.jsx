import { useState } from "react";
import { mutate } from "swr";

const AddTodo = () => {
  const [title, setTitle] = useState();
  const [note, setNote] = useState();
  const [loading, setLoading] = useState(false);

  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ data: { title: title, note: note } }),
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const noteChangeHandler = (e) => {
    setNote(e.target.value);
  };

  const addTodoHandler = async (e) => {
    e.preventDefault();
    setTitle();
    setNote();
    setLoading(true);
    await fetch("/api/add-todo", options)
      .then((data) => {
        () => mutate("/api/get-todos");
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="my-5 " style={{ width: "50%" }}>
      <form method="POST" onSubmit={(e) => addTodoHandler(e)}>
        <input
          type="text"
          className="form-control"
          placeholder="Add New Title"
          onChange={titleChangeHandler}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Add New Note"
          onChange={noteChangeHandler}
        />
        <button
          className="btn btn-primary"
          style={{
            marginTop: "10px",
            float: "left",
            marginLeft: "5px",
          }}
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
