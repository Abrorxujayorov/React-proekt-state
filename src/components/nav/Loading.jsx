import React from 'react'

export default function Loading({loading}) {
    console.log(loading);
    if (loading == true) {
        <p>Loading...</p>    
    }
    else{
        <p></p>
    }
  
}
