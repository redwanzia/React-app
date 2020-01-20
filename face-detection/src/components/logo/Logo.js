import React from 'react'
import './logo.scss';
import brain from './icons8-mind-64.png'
import Tilt from 'react-tilt'

const Logo = () => {
  return (
    <div className='ma4 mt'  >
      <Tilt className="Tilt br2 shadow-2 " options={{ max : 55 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner pa3  "> <img style={{paddingTop:'5px'}} src={brain} alt="logo"/>  </div>
    </Tilt>
    </div>
  )
}

export default Logo
