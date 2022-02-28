import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function navbar(props) {
    return (
       <>
       
<nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
</div>
    </div>
  </div>
</nav>
       </>
    );
}
