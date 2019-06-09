import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/Main';
import Post from './components/Post';
import User from './components/User';
import Photo from './components/Photo';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div id="main-container">
        <Route exact path="/" component={Main}/>
        <Route exact path="/posts" component={Post}/>
        <Route exact path="/users" component={User}/>
        <Route exact path="/photos" component={Photo}/>
      </div>
    </Router>
  );
}

export default App;
