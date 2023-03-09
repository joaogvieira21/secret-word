import React from 'react'
import './GameScreen.css'

export const GameScreen = ({verifyLetter, category}) => {
  return (
    <div className="game">
        <div className="score">
            <span>Pontuação: </span>
        </div>
        <h1>Advinhe a palavra:</h1>
        <h2 className="tip">
            Dica sobre a palavra: <span>{category}</span>
        </h2>
        <p>Voce ainda tem guesses tentativas</p>
         <div class="wordContainer">
            <span className="letter">A</span>
            <span className="letterBlank"></span>
         </div>
        <div className="letterContainer">
            <p>Tente advinhar uma letra da palavra:</p>
            <form>
                <input type="text" name="letter" maxLength={1} required/>
                <button>Try!!!</button>
            </form>
        </div>
        <div className="wrongLettersContainer">
            <p>Letras já utilizadas</p>
            <span></span>
        </div>
        <button onClick={verifyLetter}>Try</button>
    </div>
  )
}

