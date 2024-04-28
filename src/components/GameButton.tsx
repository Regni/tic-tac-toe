

interface Props{
  isFirstGame : boolean
  setIsFirstGame: React.Dispatch<React.SetStateAction<boolean>>;
  setGameStart:React.Dispatch<React.SetStateAction<boolean>>;
  handleRestart: React.MouseEventHandler<HTMLButtonElement>
}

const GameButton = ({isFirstGame, setIsFirstGame, setGameStart, handleRestart}: Props) => {

  //after Clicking start game, render field and start the game
  const handleClick = (e : any) => {
    setIsFirstGame(false); 
    setGameStart(true)
    e.target.blur();
  }
//ends the game and resets to defaults, users will stay the same
  const handleEnd = ()=>{
    setIsFirstGame(true)
    setGameStart(false)
    handleRestart
  }

  
  return (
    isFirstGame? <button onClick={handleClick}>Start Game</button> : <div className="buttonContainer"><button onClick={handleRestart}>Restart game</button>
    <button onClick={handleEnd}>end game</button></div>  )
}

export default GameButton