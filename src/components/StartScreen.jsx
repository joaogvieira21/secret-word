import React from 'react'
import './StartScreen.css'

export const StartScreen = ({startGame}) => {
  return (
    <div className="start-screen">
        <h1>Secret Word</h1>
        <p>Clique para começar a jogar</p>
        <button onClick={startGame}>Start</button>
    </div>
  )
}
