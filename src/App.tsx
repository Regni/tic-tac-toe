import { useState } from 'react'
import  GameButton  from "./components/GameButton.tsx"
import { GameSquare } from './components/GameSquare.tsx'
import './App.css'
import PlayerInput from './components/PlayerInput.tsx'
import { useWinner } from './components/useWinner.tsx'
import WinnerDiv from './components/WinnerDiv.tsx'



function App() {
  const [isFirstGame, setIsFirstGame] = useState<boolean>(true)
  const [gameStart, setGameStart] = useState<boolean>(false)


  const defaultSquares = Array(9).fill(null)

  const [squares, setSquares] = useState(defaultSquares)
  const [xNext, setXNext] = useState<boolean>(true)
  
const handleClick =(index : number): void=>{
  if(squares[index]){
    return
  }
  const newGameState = squares.slice();
  newGameState[index] = xNext ? "X" :"O"
  setXNext(!xNext)
  setSquares(newGameState)
}

const handleRestart = () =>{
  setSquares(defaultSquares)
}
const winner = useWinner(squares)



  return (
    <>
      {winner && (<WinnerDiv/>  )}
     {gameStart ? (<div className='gameContainer'>
      <div className="row">
  <GameSquare value={squares[0]} handleClick={() => handleClick(0)}/>
  <GameSquare value={squares[1]} handleClick={() => handleClick(1)}/>
  <GameSquare value={squares[2]} handleClick={() => handleClick(2)}/>
  </div>  
<div className="row">
  <GameSquare value={squares[3]} handleClick={() => handleClick(3)}/>
  <GameSquare value={squares[4]} handleClick={() => handleClick(4)}/>
  <GameSquare value={squares[5]} handleClick={() => handleClick(5)}/>
</div>  
<div className="row">
  <GameSquare value={squares[6]} handleClick={() => handleClick(6)}/>
  <GameSquare value={squares[7]} handleClick={() => handleClick(7)}/>
  <GameSquare value={squares[8]} handleClick={() => handleClick(8)} />
</div>  
</div>) : null } 

<GameButton isFirstGame={isFirstGame} setIsFirstGame={setIsFirstGame} setGameStart={setGameStart} handleRestart={handleRestart}/>


<PlayerInput/>
      
    </>
  )
}

export default App
