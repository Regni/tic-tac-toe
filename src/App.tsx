import { useEffect, useState } from 'react'
import  GameButton  from "./components/GameButton.tsx"
import { GameSquare } from './components/GameSquare.tsx'
import './App.css'
import PlayerInput from './components/PlayerInput.tsx'
import { useWinner } from './components/useWinner.tsx'
import WinnerDiv from './components/WinnerDiv.tsx'



function App() {
  const [isFirstGame, setIsFirstGame] = useState<boolean>(true)
  const [gameStart, setGameStart] = useState<boolean>(false)
  const [players, setPlayers] = useState({x: "player X", o: "player O"})
  const [winner, setWinner] = useState<string>("")

  const defaultSquares = Array(9).fill(null)

  const [squares, setSquares] = useState<string[]>(defaultSquares)
  const [xNext, setXNext] = useState<boolean>(true)
  
//handle the clicks on the squares  
const handleClick =(index : number): void=>{
  //stop user input when there is a winner or the square has already a "x" or "o" in there.
  if(squares[index] || winner){
    return
  }
  //creates new array and update the square that is clicked
  const newGameState = squares.slice();
  newGameState[index] = xNext ? "X" :"O"
  //changes the symbol for next player
  setXNext(!xNext)
  //updates the state 
  setSquares(newGameState)
}
//Reset settings to start new game
const handleRestart = () =>{
  setSquares(defaultSquares)
  setWinner("")
  setXNext(true)
}

//check if there is a winner and set the winner to announce the name
useEffect(()=>{
  const winDecide = useWinner(squares)

  if(winDecide == "X"){
    setWinner(players.x)
  }
  if(winDecide =="O"){
    setWinner(players.o)
  }

},[squares])




  return (
    <>
      {winner && (<WinnerDiv win={winner}/>  )}
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


<PlayerInput setPlayers={setPlayers}/>
      
    </>
  )
}

export default App
