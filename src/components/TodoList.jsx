import React from "react";

export default function TodoList({ children }) {
  return (
    <section>
      <ul className="">{children}</ul>
    </section>
  );
}
