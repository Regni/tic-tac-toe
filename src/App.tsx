import { useState } from 'react'
import  GameButton  from "./components/GameButton.tsx"
import './App.css'

import GameBoard from './components/GameBoard.tsx'

function App() {
  const [isFirstGame, setIsFirstGame] = useState<boolean>(true)
  const [gameStart, setGameStart] = useState<boolean>(false)

  return (
    <>
     {gameStart ? <GameBoard/> : null } 
      <GameButton isFirstGame={isFirstGame} setIsFirstGame={setIsFirstGame} setGameStart={setGameStart}/>
      
    </>
  )
}

export default App
