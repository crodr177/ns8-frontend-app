import React, { Component} from 'react';
import axios from 'axios';
import '../styles/User.css'

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
    })
  }

  render(){
    return(
      <div id="user-page-container">
        <h1 className="page-header">Friends</h1>
        <div id="users-section">
          {
            this.state.users.map((user, i) => (
              <ul className="users" key={"key-" + i}>
                <li><span>Username:</span> {user.username}</li>
                <li><span>Name:</span> {user.name}</li>
                <li><span>Email:</span> {user.email}</li>
                <li><span>Phone Number:</span> {user.phone}</li>
                <li><span>Website:</span> {user.website}</li>
              </ul>
            ))
          }
        </div>
      </div>
    )
  }
}