import { useState } from "react"

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
    // setCount((currentState) => {
    //   const newState = currentState + 1
    //   return newState
    // })
    // console.log(count)

    //   setTimeout(() => {
    //     setCount((cureentValue) => {
    //       return cureentValue + 1
    //     })
    //   }, 3000)
  }

  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={increase}>
        {" "}
        Click me
      </button>
    </>
  )
}

export default UseStateGotcha
