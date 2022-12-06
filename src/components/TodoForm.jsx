import React, { useContext, useState } from "react";
function TodoForm( { createTodo, setToggleModal } ) {
  const [newTodoValue, setNewTodoValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    createTodo(newTodoValue);
    setToggleModal(false);
  };

  const onCancel = () => {
    setToggleModal(false);
  };
  const btnStyle =
    "cursor-pointer inline-block text-lg font-normal w-[120px] h-12 rounded-sm border-none font-[Montserrat]";
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-[90%] max-w-xs bg-white px-8 py-10"
    >
      <label className="text-black text-center font-bold mb-6">
        Escribe tu nuevo TODO
      </label>
      <textarea
        name="todo-text"
        id="text"
        cols="20"
        rows="5"
        placeholder="Hacer la tarea"
        required
        wrap="hard"
        className="bg-slate-200 border-2 border-slate-300 rounded-md shadow-md text-gray-900 text-lg px-4 py-2 text-center h-24 w-[calc(100%-25px)] placeholder:font-[Montserrat] placeholder:text-[#a5a5a5] placerholder:font-bold focus:outline-black"
        onChange={(e) => setNewTodoValue(e.target.value)}
      ></textarea>
      <div className="mt-4 flex justify-between items-center w-full">
        <button
          type="button"
          onClick={onCancel}
          className={`${btnStyle} text-black bg-transparent hover:bg-red-500 hover:text-white transition-all duration-300 ease-out transform hover:scale-105`}
        >
          CANCELAR
        </button>
        <button
          type="submit "
          className={`${btnStyle} text-gray-100 bg-gray-600 hover:bg-gray-700 transition-all duration-300 ease-out transform hover:scale-105`}
        >
          AGREGAR
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
