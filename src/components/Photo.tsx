import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

interface State {
  image: string,
}

export default class Photo extends Component<State>{
  state: State = {
    image: ''
  }

  public componentDidMount(){
    this.getPhotos()
  }

  getPhotos = () => {
    axios.get('/api/photos').then(resp => {
      var photo = resp.data;
      this.setState({
        image: photo.url
      })
      console.log(this.state.image)
    })
  }

  render(){
    return(
      <div>
        <Link to="/"><button>Back</button></Link>
        <h1>Photos</h1>
        <img alt="placeholder" src={this.state.image}/>
      </div>
    )
  }
}