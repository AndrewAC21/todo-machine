import React from "react";

function TodoSkeleton() {
  return (
    <div className="w-[calc((100%-120px)+48px)] h-12 mb-5 bg-slate-600 animate-pulse"></div>
  );
}

export default TodoSkeleton;
