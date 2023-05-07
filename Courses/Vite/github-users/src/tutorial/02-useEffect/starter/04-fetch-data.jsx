import { useEffect, useState } from "react"

const url = "https://api.github.com/users"

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getPeople = async () => {
      try {
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data)
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPeople()
  }, [])

  return (
    <div>
      <h3>Git hub users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url, site_admin } = user
          return (
            <li key={id} className="card_ban">
              <img src={avatar_url} alt="" />
              <div>
                <h5> {login} </h5>

                <a href={html_url}> Profile </a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default FetchData
