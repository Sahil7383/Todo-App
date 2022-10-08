import React from "react";
import useSWR from "swr";

const CompletedTodos = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/completed-todos", fetcher, {
    refreshInterval: 50,
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading....</div>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Note</th>
          <th scope="col">Created At</th>
        </tr>
      </thead>
      <tbody>
        {data?.todos?.map((todo) => (
          <tr key={todo.ts}>
            <th scope="row">1</th>
            <td>{todo.data.title}</td>
            <td>{todo.data.note}</td>
            <td>{new Date(todo.data.updatedAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompletedTodos;
