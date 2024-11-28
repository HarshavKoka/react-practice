import React from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = React.useState(0)
  function add() {
    setCount(count + 2)

  } function sub() {
    setCount(count - 2)
  }
  return (
    <div className="counter">
      <button className="counter--minus" onClick={sub}>-2</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>+2</button>
    </div>
  )
}
