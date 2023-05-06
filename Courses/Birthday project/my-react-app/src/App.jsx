import { useState } from "react"
import people from "./data"
import "./App.css"
import List from "./List"

const App = () => {
  const [person, setPerson] = useState(people)

  const clear = () => {
    setPerson([])
  }
  return (
    <main>
      <section className="container">
        <h2>There are {person.length} Birthdays Today</h2>
        <List people={person} />
        <button onClick={clear} className="btn btn-block">
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App
