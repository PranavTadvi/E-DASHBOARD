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

      <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            WEBCOM
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
          {auth ? (
            <>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active text-white" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/add">
                  Add Product
                  </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link text-white" to="/profile">
                Profile
                  </Link>
                
                </li>
              
              </ul>
            
                <button className="btn btn-danger fw-bold" onClick={logout}>
                  Logout
                </button>
                </>
                ) : (
                  <ul className=" my-auto">
                    <button className="btn btn-success me-2">
                      <Link
                        className="text-white text-decoration-none "
                        to="/signup"
                      >
                        SignUp
                      </Link>
                    </button>

                    <button className="btn btn-danger  me-2">
                      <Link className="text-white text-decoration-none" to="/login">
                        Login
                      </Link>
                    </button>
                  </ul>
                  )}
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
