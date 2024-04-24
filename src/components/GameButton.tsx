

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

  
  return (
    isFirstGame? <button onClick={handleClick}>Start Game</button> : <button onClick={handleRestart}>Restart game</button>  )
}

export default GameButton