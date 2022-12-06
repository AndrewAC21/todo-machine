import React, { useState } from "react";

export default function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="my-5 flex justify-center items-center bg-slate-200 relative shadow-xl">
      <span
        className={` flex cursor-pointer text-3xl font-semibold h-12 w-12 items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
          completed ? "text-green-700" : "text-red-700"
        }`}
        onClick={onComplete}
      >
        ✓
      </span>
      <p
        className={`text-md font-serif font-medium w-[calc(100vw-120px)] ${
          completed ? "line-through" : ""
        }`}
      >
        {text}
      </p>
      <span
        className="cursor-pointer text-3xl hover:text-red-700 absolute right-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}
