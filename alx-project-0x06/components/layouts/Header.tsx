// components/layouts/Header.tsx

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My App</h1>
      <div className="flex items-center space-x-4">
        <span className="text-lg">Counter: {count}</span>
      </div>
    </header>
  );
};

export default Header;