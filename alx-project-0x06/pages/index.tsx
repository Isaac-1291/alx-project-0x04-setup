import React from 'react'
import Counter from '@/components/Counter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Redux-like Counter with Context</h1>
      <Counter />
    </main>
  )
}