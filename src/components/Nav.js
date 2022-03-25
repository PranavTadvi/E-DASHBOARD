import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  // }, []);
  return (
    <>
      <div className="navDiv">
        <h3>WEBCOM</h3>
        {auth ? (
          <ul className="navLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Product</Link>
            </li>
            <li>
              <Link to="/update">UpdateProduct</Link>
            </li>

            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <button className="logout" onClick={logout}>
              Logout
            </button>
            {/* <li>
              <Link to="">({auth.name})</Link>
            </li> */}
          </ul>
        ) : (
          <ul className="navLinks navRight">
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Nav;
