function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Person />
      <Message />
    </>
  )
}

const Person = () => <h2>John Doe</h2>
const Message = () => {
  return <p>This is the message</p>
}
export default App
