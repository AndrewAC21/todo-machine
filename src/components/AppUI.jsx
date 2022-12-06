import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import CreateTodoButton from "./CreateTodoButton";
import Modal from "../modals/Modal";
import TodoSkeleton from "./TodoSkeleton";

function AppUI() {
  const { toggleModal, setToggleModal, loading } = useContext(TodoContext);
  return (
    <main className="flex flex-col justify-center items-center bg-slate-400 min-h-screen ">
      <TodoCounter />
      <TodoSearch />

      {loading &&
        Array(4)
          .fill()
          .map(()=> <TodoSkeleton />)}
      <TodoContext.Consumer>
        {/* Esta es una forma opcional de hacer el useContext*/}
        {({
          error,
          loading,
          todos,
          toggleCompleteTodo,
          deleteTodo,
          searchValue,
        }) => (
          <TodoList>
            {error && <p>Error...</p>}
            {todos
              .map((todo, index) => (
                <TodoItem
                  text={todo.text}
                  key={index}
                  completed={todo.completed}
                  onComplete={() => toggleCompleteTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))
              .filter((todo) =>
                todo.props.text
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )}
          </TodoList>
        )}
      </TodoContext.Consumer>
      {toggleModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
      <CreateTodoButton
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />
    </main>
  );
}
export default AppUI;
