import React from 'react'
import {Link} from "react-router-dom";
  
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                <i class="fa-solid fa-phone fa-bounce fa-2xl"></i>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active fs-3 fw-bold" to="/">Calls</Link>
                    </li>
                </ul>
                </div>
                <div>
                  <i className="fa-solid fa-user mx-3 fa-xl"></i>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar