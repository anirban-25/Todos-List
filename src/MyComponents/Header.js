import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";
export default function Header(props){
    return (
    <nav className="navbar navbar-expand-lg bg-light yes">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active pad" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pad" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 btn2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success btn1" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}
Header.defaultProps={
  title: "Your title here"
}

Header.propTypes={
    title: PropTypes.string
}
