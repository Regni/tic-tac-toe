

interface Props{
  isFirstGame : boolean
  setIsFirstGame: React.Dispatch<React.SetStateAction<boolean>>;
  setGameStart:React.Dispatch<React.SetStateAction<boolean>>;
  handleRestart: React.MouseEventHandler<HTMLButtonElement>
}

const GameButton = ({isFirstGame, setIsFirstGame, setGameStart, handleRestart}: Props) => {

  const handleClick = (e : any) => {
    setIsFirstGame(false); 
    setGameStart(true)
    e.target.blur();
  }

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