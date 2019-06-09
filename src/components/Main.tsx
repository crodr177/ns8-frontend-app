import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Main: FunctionComponent = () => {
    return(
      <div>
        <h1>Main Page</h1>
        <div>
          <Link to="/users"><h2>Friends</h2></Link>
          <Link to="/posts"><h2>Posts</h2></Link>
          <Link to="/photos"><h2>Photos</h2></Link>
        </div>
      </div>
    )
}

export default Main;