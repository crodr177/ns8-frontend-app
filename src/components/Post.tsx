import React, { Component} from 'react';
import axios from 'axios';
import '../styles/Post.css'

interface State {
  post: any
  comments: any[]
}

export default class Post extends Component<State>{
  state: State = {
    post: '',
    comments: []
  }

  public componentDidMount(){
    this.getPost()
    this.getComments()
  }

  getPost = () => {
    axios.get('/api/post').then(resp => {
      this.setState({
        post: resp.data
      })
    })
  }

  getComments = () => {
    axios.get('/api/comments').then(resp => {
      this.setState({
        comments: resp.data
      })
    })
  }

  render(){
    return(
      <div id="post-page-container">
        <h1 className="page-header">Posts</h1>
        <div id="post-section">
          <h2>Title: {this.state.post.title}</h2>
          <p>Body: {this.state.post.body}</p>
        </div>
        <h3>Comments:</h3>
        <div id="comment-section">
          {
            this.state.comments.map((comment, i) => (
              <ul className="comment" key={"comment-" + i}>
                <li className="username">User: {comment.name}</li>
                <li className="body">Body: {comment.body}</li>
              </ul>
            ))
          }
        </div>
      </div>
    )
  }
}