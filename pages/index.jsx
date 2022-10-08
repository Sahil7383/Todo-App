import AddTodo from "../components/Todo/AddTodo";
import Todos from "../components/Todo/Todos";

export default function Home() {
  return (
    <div
      className="d-flex flex-column"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AddTodo />
      <Todos />
    </div>
  );
}
