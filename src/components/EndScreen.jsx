import React from 'react'
import './EndScreen.css'


export const EndScreen = ({retry}) => {
  return (
    <div>
      <h1>End Screen</h1>
      <button onClick={retry}>Start</button>
    </div>
  )
}
