import React from "react";

export default function CreateTodoButton({ setToggleModal, toggleModal }) {
  return (
    <button
      className="bg-blue-500 pb-2 hover:bg-blue-700 text-white text-3xl font-bold h-16 w-16 flex justify-center items-center rounded-full fixed bottom-6 right-6 z-10"
      onClick={() => setToggleModal(!toggleModal)}
    >
      +
    </button>
  );
}
