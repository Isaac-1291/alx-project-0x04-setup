// pages/counter-app.tsx

import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks";
import { RootState } from "../store";
import { increment, decrement } from "../features/counter/counterSlice";

const CounterApp: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-xl mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default CounterApp;