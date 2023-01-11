import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <div className="loginRegisterButton">
          <Link className="link" to="/register" style={{ textDecoration: "none", color: "white" }}>Register</Link>
        </div>
        <div className="homeLoginButton">
        <Link
          className="button"
          to="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default Login