import React, { useState } from 'react'

console.log('NODE_ENV', process.env.NODE_ENV)

const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>koa-webpack-demo</h1>
      <p>计数器: {counter}</p>
      <button onClick={() => setCounter((v) => v + 1)}>+1</button>
      <button onClick={() => setCounter((v) => v - 1)}>-1</button>
    </div>
  )
}

export default App
