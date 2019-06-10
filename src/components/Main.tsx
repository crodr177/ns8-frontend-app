import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css'

const Main: FunctionComponent = () => {
    return(
      <div id="main-page-container">
        <div id="home-header">
          <h1>Welcome to JSONPlaceholder</h1>
          <h2>Your custom profile with random stuff</h2>
          <p>Click any to get started!</p>
        </div>
        <div id="pages">
          <Link to="/users"><h2 className="page">Friends</h2></Link>
          <Link to="/posts"><h2 className="page">Posts</h2></Link>
          <Link to="/photos"><h2 className="page">Photos</h2></Link>
        </div>
      </div>
    )
}

export default Main;