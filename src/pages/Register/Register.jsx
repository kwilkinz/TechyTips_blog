import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <div className="registerLoginButton">
        <Link
          className="button"
          to="/login"
          style={{ textDecoration: "none", color: "white" }}
        >
          Login
        </Link>
      </div>
      <div className="homeButton">
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
};

export default Register;
