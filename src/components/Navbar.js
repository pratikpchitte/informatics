import React from 'react';
import { ReactComponent as Logo } from "../img/logo.svg";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <Logo />
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
            
          </button>
          <di div className='mx-2'>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  NEWS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown1"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  ARTICLES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  PRINT MAGAZINE
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown2"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  MORE
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          </di>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
