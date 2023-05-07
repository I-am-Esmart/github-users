import { useState } from "react"

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 33,
    hobby: "riding bicycle",
  })

  const showNextPerson = () => {
    // setPerson({
    //   name: "steve",
    //   age: 40,
    //   hobby: "reading",
    // })

    // Override a particular property in the state. example below
    setPerson({ ...person, name: "Mike" })
  }

  return (
    <>
      <h3> Name: {person.name} </h3>
      <h3> Age: {person.age} </h3>
      <h4>Enjoys: {person.hobby} </h4>
      <button className="btn" onClick={showNextPerson}>
        Show next
      </button>
    </>
  )
}

export default UseStateObject
