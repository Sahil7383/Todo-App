import React from "react";
import useSWR from "swr";
import Todo from "./Todo";

const Todos = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/get-todos", fetcher, {
    refreshInterval: 50,
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading....</div>;

  return (
    <div
      style={{
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        border: data && "0.2px solid black",
        borderRadius: data && "0.1rem",
      }}
    >
      {data?.todos?.map((todo) => (
        <Todo key={todo.ts} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
