
//DATA
import { wordsList } from './src/data/data'
//CSS
import './App.css'
//COMPONENTS
import { StartScreen } from './src/components/StartScreen'
import { GameScreen } from './src/components/GameScreen'
import { EndScreen } from './src/components/EndScreen'
//HOOKS
import { useCallback, useEffect, useState } from 'react'




function App() {
  const stages = [
    {id:1, name:"start"},
    {id:2, name:"game"},
    {id:3, name:"end"}
  ]
  
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedCategory, setPickedCategory] = useState("")
  const [pickedWord, setPickedWord] = useState("")
  const [letters, setLetters] = useState("")
  const [guessedLetters, setGuesseLetters] = useState("")
  const [wrongLetters, setWrongLetters] = useState("")
  const [guesses, setGuesses] = useState("3")
  const [score, setScore] = useState("0")

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category}
  }

  const startGame = () => {
    const { word, category } = pickWordAndCategory()
    let wordLetters = word.split("")
    wordLetters = wordLetters.map(element => element.toLowerCase())
    
    
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
   
    
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }
  const retry = () => {
    setGameStage(stages[0].name)
  }


  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
      {gameStage === "end" && <EndScreen retry={retry} 
      pickedWord={pickedWord} 
      category={pickedCategory} 
      letters={letters} 
      wrongLetters={wrongLetters} 
      guesses={guesses} 
      score={score}
      />}
    </div>
  )
}

export default App
