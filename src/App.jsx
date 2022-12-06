import { useTodo } from "./hooks/useTodo";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import CreateTodoButton from "./components/CreateTodoButton";
import Modal from "./modals/Modal";
import TodoSkeleton from "./components/TodoSkeleton";

function App() {
  const {
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    createTodo,
    error,
    todos,
    toggleCompleteTodo,
    deleteTodo,
    toggleModal,
    setToggleModal,
  } = useTodo();
  return (
    <main className="flex flex-col justify-center items-center bg-slate-400 min-h-screen ">
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {loading &&
        Array(4)
          .fill()
          .map(() => <TodoSkeleton />)}
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
            todo.props.text.toLowerCase().includes(searchValue.toLowerCase())
          )}
      </TodoList>
      {toggleModal && (
        <Modal>
          <TodoForm setToggleModal={setToggleModal} createTodo={createTodo} />
        </Modal>
      )}
      <CreateTodoButton
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />
    </main>
  );
}
export default App;
