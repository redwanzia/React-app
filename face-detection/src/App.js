import React from 'react';
import './App.css';

import Particles from 'react-particles-js'

import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLingForm from './components/imagelinkform/ImageLingForm';
import Rank from './components/rank/Rank';



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


function App() {
	return (
    <div className='App'>


      <Particles className = 'particles'
      params={particlesOptions} />
    
			<Navigation />
      <Logo/>   
      <Rank/>   
      <ImageLingForm />
      
      {/* 
      <FaceRecognition /> */}
		</div>
	);
}

export default App;
