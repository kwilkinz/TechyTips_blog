import "./Topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "https://techytips-backend.onrender.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };


  return (
    <div className="top">
      <div className="topLeft"></div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link
              className="link-home"
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link
              className="link-write"
              to="/write"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
            <Link
              className="setting-login"
              to="/settings"
              style={{ textDecoration: "none", color: "lightcoral"}}
              // <img className="topImg" src={PF + user.profilePic} alt="" /> 
            >
             SETTINGS
            </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                className="link-login"
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                LOGIN
              </Link>
            </li>
            {/* <li className="topListItem">
              <Link
                className="link"
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                REGISTER
              </Link>
            </li> */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Topbar;
