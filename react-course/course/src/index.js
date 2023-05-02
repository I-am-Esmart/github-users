import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import Book1 from "./assets/Book1.jpg"
import Book2 from "./assets/Book2.jpg"
import Book3 from "./assets/Book3.jpg"
import "./index.css"

const BookList = () => {
  return (
    <>
      <section className="booklist">
        <Book
          name="Daniel G. Miller"
          job="developer"
          title="The Tree of Knowledge"
          number={22}
        />
        <Book />
        <Book />
      </section>
    </>
  )
}

const Book = (props) => {
  const title = "The Tree of Knowledge"
  const author = "Daniel G. Miller"
  console.log(props)
  return (
    <article className="book">
      <img src={Book1} />
      <h2>{props.title}</h2>
      <h4> {props.name} </h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById("root"))
