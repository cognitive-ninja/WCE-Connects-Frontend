import React from 'react';
import pic from './wce_pic.jpg'
export default function Home(){
    return(
        <>
        <div style={{backgroundColor:"black", color:"white"}}>
            <img src={pic} alt="pic" style={{minWidth:"100%", height:"80%"}}/>
        </div>
        </>
    );
}