import React from 'react'
import './faceRecognition.scss'

const FaceRecognition = ({imageUrl,box}) => {
  return (
    <div className='center ma ' >
    <div className='absolute mt3 ' >
    <img src={imageUrl} alt='' width='500px' height='auto' id='inputImage' />  
    <div className='bounding-box'
    style={{
      top: box.topRow,
      right: box.rightCol,
      bottom: box.bottomRow,
      left: box.leftCol    
    }}

    
    
    
    ></div>  
    </div>
      
    </div>
  )
}

export default FaceRecognition
