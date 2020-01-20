import React from 'react';
import './navigation.scss';

const Navigation = ({onRouteChange,isSingedIn}) => {
        if(isSingedIn){
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
                    <p onClick={ ()=> onRouteChange ('singOut')} className='f3 link dim black pa3 pointer' >Sign Out</p>   
                </nav>            )
        } else {
            return (


            <nav style={{display: 'flex', justifyContent: 'flex-end'}} >
                <p onClick={ ()=> onRouteChange ('singIn')} className='f3 link dim black pa3 pointer' >Sign In</p>    
                <p onClick={ ()=> onRouteChange ('register')} className='f3 link dim black pa3 pointer' >Register</p>  
            </nav>
            )




                



        }





};

export default Navigation;
