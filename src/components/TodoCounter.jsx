import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
export default function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="text-center py-4i m-4">
      {`Haz completado ${completedTodos} de ${totalTodos} TODOS totales `}
    </h2>
  );
}
