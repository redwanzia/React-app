import React, { Component } from 'react'
import './App.css';

import Particles from 'react-particles-js'
import Clarifai from 'clarifai'

import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLingForm from './components/imagelinkform/ImageLingForm';
import Rank from './components/rank/Rank';
import SignIn from './components/signIn/SignIn';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Register from './components/register/Register';


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
        imageUrl: '',
        box: {},
        route:'singIn',
        isSingedIn: false


      }
    }



    calculateFaceLocation=(data)=>{
     const clarifyFace=  data.outputs[0].data.regions[0].region_info.bounding_box
     const image = document.getElementById('inputImage');   
     const width = Number(image.width);
     const height = Number(image.height);

     return{
      leftCol : clarifyFace.left_col * width,
      topRow :  clarifyFace.top_row * height,
      rightCol: width - (clarifyFace.right_col * width ),
      bottomRow: height- (clarifyFace.bottom_row * height)
     }          

    }

    displayFaceBox =(box) =>{
      console.log(box);
      this.setState({box:box})
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
        this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err) ) 
              
    }

    onRouteChange = (route)=>{

      if(route === 'signOut'){
        this.setState({isSingedIn:false})
      }else if(route === 'home'){
        this.setState({isSingedIn:true})
      }

      this.setState({route: route})

    }

    render() {
      const {route,isSingedIn,box,imageUrl} = this.state
      return (
      <div className='App'>
          <Particles className = 'particles'
          params={particlesOptions} />      
          <Navigation isSingedIn={isSingedIn}  onRouteChange={this.onRouteChange} />
          {
            route ==='home'
            ? <div>
            <Logo/>   
            <Rank/>   
            <ImageLingForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            />        
            <FaceRecognition box={box}  imageUrl={imageUrl} />            
          </div>
            :(route === 'singIn')           
            ?<SignIn onRouteChange={this.onRouteChange} />
            :<Register onRouteChange={this.onRouteChange} />
            
          }
          
      </div>

      )
    }
  }





export default App;







