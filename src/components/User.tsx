import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface State {
  users: any[]
}

export default class User extends Component<State>{
  state: State = {
    users: []
  }

  public componentDidMount(){
    this.getUsers()
  }

  getUsers = () => {
    axios.get('/api/users').then(resp => {
      this.setState({
        users: resp.data
      })
      console.log(this.state.users)
    })
  }

  render(){
    return(
      <div>
        <Link to="/"><button>Back</button></Link>
        <h1>Friends</h1>
        {
          this.state.users.map((user, i) => (
            <ul key={"key-" + i}>
              <li>Username: {user.username}</li>
              <li>Name: {user.name}</li>
              <li>Email: {user.email}</li>
              <li>Phone Number: {user.phone}</li>
              <li>Website: {user.website}</li>
            </ul>
          ))
        }
      </div>
    )
  }
}