import React from 'react'
import { useCount } from '@/context/CountContext'

export default function Counter() {
  const { count, increment, decrement } = useCount()

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-bold">Count: {count}</h2>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </div>
  )
}