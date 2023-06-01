import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
     <div className="p-1 mb-1 bg-info text-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" alt="">
            OM
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <li className="nav-link" onClick={() => navigate("/")}>
                  Home
                </li>
              </li>

              <li className="nav-item">
                <li className="nav-link" onClick={() => navigate("/about")}>
                  About
                </li>
              </li>
              <li className="nav-item">
                <li className="nav-link" onClick={() => navigate("/school")}>
                  School-app
                </li>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.eastandwesthighschool.org/home"
                  alt=""
                  target="_blank"
                >
                  <li className="nav-link">School</li>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  College
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://gjcollegebihta.ac.in/"
                      alt=""
                      target="_blank"
                    >
                      Bachelor Degree
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="http://www.ignou.ac.in/"
                      alt=""
                      target="_blank"
                    >
                      Master Degree
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Header;
