import { useState } from "react";
import axios from "axios";
const base_url = "https://apingweb.com/api/login";

const PostRequest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(base_url, {
        email: email,
        password: password,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
    // console.log(name, email);
  };

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <h2 className="text-center">Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
      </form>
    </section>
  );
};
export default PostRequest;
