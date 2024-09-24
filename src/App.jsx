import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Contador : ${count}`
  },[count])

  return (
    <>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count - 1)}>-</button>
    </>
  )
}

export default App