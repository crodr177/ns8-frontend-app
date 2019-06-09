import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      console.log('post data', this.state.post)
    })
  }

  getComments = () => {
    axios.get('/api/comments').then(resp => {
      this.setState({
        comments: resp.data
      })
      console.log('comment data', this.state.comments)
    })
  }

  render(){
    return(
      <div>
        <Link to="/"><button>Back</button></Link>
        <h1>Posts</h1>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.body}</p>
        <h3>Comments:</h3>
        {
          this.state.comments.map((comment, i) => (
            <ul key={"comment-" + i}>
              <li>User: {comment.name}</li>
              <li>Body: {comment.body}</li>
            </ul>
          ))
        }
      </div>
    )
  }
}