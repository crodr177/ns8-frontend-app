import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const NavBar: FunctionComponent = () => {
  return(
    <div id="nav-container">
      <h1 className="header-title"><Link to="/">JSONPlaceholder</Link></h1>
      <div className="links">
        <Link to="/"><p>Home</p></Link>
        <Link to="/users"><p>Friends</p></Link>
        <Link to="/posts"><p>Posts</p></Link>
        <Link to="/photos"><p>Photos</p></Link>
      </div>
    </div>
  )
}

export default NavBar;