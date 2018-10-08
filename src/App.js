import React, { Component } from 'react';
import './App.css';
import images from './images.json'
import { ViewImageInLarge } from './view-image-in-large';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null
    }
  }
  selectImage(image) {
    this.setState({
      selectedImage:image
    });
  }
  render() {
    var imageList = []
    Object.keys(images).forEach(element => {
      imageList.push(images[element]);
    });
    return (
      <div className="container">
        <div className="left-nav">

          {imageList.map((image) =>
            <div key={image.name} onClick={()=>this.selectImage(image)}>
              <img src={image.path} alt="each-img" width="150" />
            </div>
          )}
        </div>
        <div className="view-image-container">
          <ViewImageInLarge image={this.state.selectedImage} />
        </div>
      </div>
    );
  }
}
export default App;
