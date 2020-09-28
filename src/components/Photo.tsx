import React, { Component} from 'react';
import axios from 'axios'
import '../styles/Photo.css'

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
    })
  }

  render(){
    return(
      <div id="photo-page-container">
        <h1 className="page-header">Photos</h1>
//        <p>Feast your eyes!</p>
        <img className="image" alt="placeholder" src={this.state.image}/>
      </div>
    )
  }
}