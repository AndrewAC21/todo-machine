import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function useTodo() {
  const [searchValue, setSearchValue] = useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [toggleModal, setToggleModal] = useState(false);
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;
  const toggleCompleteTodo = (text) => {
    const todoItem = todos.filter((todo) => todo.text === text)[0];
    todoItem.completed = !todoItem.completed;
    const newTodo = [...todos];
    saveTodos(newTodo);
  };

  const deleteTodo = (text) => {
    const todoItemIndex = todos.indexOf((todo) => todo.text === text);
    todos.splice(todoItemIndex, 1);
    const newTodo = [...todos];
    saveTodos(newTodo);
  };
  const createTodo = (text) => {
    const newTodo = { text, completed: false };
    todos.push(newTodo);
    saveTodos([...todos]);
  };
  return {
    toggleCompleteTodo,
    deleteTodo,
    createTodo,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    loading,
    error,
    todos,
    toggleModal,
    setToggleModal,
  };
}

export { useTodo };
