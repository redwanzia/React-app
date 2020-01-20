import React, { Component } from 'react'
import './App.css';

import Particles from 'react-particles-js'
import Clarifai from 'clarifai'

import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLingForm from './components/imagelinkform/ImageLingForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/facerecognition/FaceRecognition';







const app = new Clarifai.App({
  apiKey: 'b04e7da3fce342e9a37beef91005001c'
 });



const particlesOptions ={ 

  particles: {
    number: {
      value:30,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
 }  

  class App extends Component {

    constructor(props){
      super(props)

      this.state={
        input : '',
        imageUrl: ''

      }
    }

      

    onInputChange = (e) => {
     this.setState({input:e.target.value})

    }

    onButtonSubmit = (e) => {
      e.preventDefault()
      console.log('click');
      this.setState({imageUrl:this.state.input})
      app.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input).then(
      function(response) {
        // do something with response
        
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box   )
      },
      function(err) {
        // there was an error
      }
  );
      
    }

    render() {
      return (
        <div className='App'>
        <Particles className = 'particles'
        params={particlesOptions} />      
        <Navigation />
        <Logo/>   
        <Rank/>   
        <ImageLingForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />        
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>

      )
    }
  }





export default App;







