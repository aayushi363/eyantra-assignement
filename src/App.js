import React, { Component } from "react";
import './App.css';
import './style.css';
import PhotoContainer from "./PhotoContainer";

class App extends Component {
  constructor(){
    super();
    this.state = {
      photos: [],
      photo: ''
    };
  }

  componentDidMount() {
    fetch('https://api.thedogapi.com/v1/images/search?limit=20')
    // fetch('https://app.pixelencounter.com/api/basic/svgmonsters?primaryColor=string') //link for API provided by you
      .then(response => {
        console.log('response',response);
        if (!response.ok) {
          throw Error("Error fetching the cute doggie");
        }
        return response.json()
      .then(allData => {
        console.log(allData);
        this.setState({ photos: allData });
        })
      .catch(err => {
        throw Error(err.message);
        });
      }
    );
  }
// for displaying popup
  render(){
    return (
      <section className="app">
        <PhotoContainer changePhoto={(url)=>{console.log(url); this.setState({photo:url})}} photos={this.state.photos} />
        <div id="popup1" className="overlay">
            <div className="popup">
                <h2>Download this image??</h2>
                <a className="close" href="#">&times;</a>
                <div className="content">
                    <img className="popup_img" src={this.state.photo} alt="doggo photo"/>
                    <br />
                    <a className="down" href={this.state.photo} target="_blank" download>
                     download
                    </a>
                </div>
            </div>
        </div>
      </section>
    );
  }
}
export default App;
