import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useAppDispatch } from '@/store/hooks'
import { increment, decrement } from '@/store/features/counterSlice'

export default function CounterApp() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-bold">Redux Count: {count}</h2>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </div>
  )
}