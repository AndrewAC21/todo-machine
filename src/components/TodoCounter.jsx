export default function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className="text-center py-4i m-4">
      {`Haz completado ${completedTodos} de ${totalTodos} TODOS totales `}
    </h2>
  );
}
