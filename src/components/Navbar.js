import React from 'react'
import { ReactComponent as Logo } from "../img/logo.svg";

export default function Navbar() {
  return (
    <div className="container">  
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong ">
            
            <div className="container-fluid">
            
                <a className="navbar-brand" href="/">
                    <Logo></Logo>
                </a>            
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">NEWS</a>
                    </li>

                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        ARTICLES
                    </a>
                    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                        <a className="dropdown-item" href="/">Action</a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="/">Another action</a>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                        <a className="dropdown-item" href="/">Something else here</a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">PRINT MAGAZINE</a>
                    </li>
                
                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        MORE
                    </a>
                    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                        <a className="dropdown-item" href="/">Action</a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="/">Another action</a>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                        <a className="dropdown-item" href="/">Something else here</a>
                        </li>
                    </ul>
                    </li>

                </ul>
                
                </div>
                
            </div>
            
            </nav>
    </div>
  )
}
