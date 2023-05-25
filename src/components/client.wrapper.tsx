"use client";

import { ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
}
export default function ClientWrapper({ children }: IProps) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          onClick={decrement}
        >
          -
        </button>
        <span className="bg-gray-200 px-4 py-2">{count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={increment}
        >
          +
        </button>
      </div>
      {children}
    </>
  );
}
