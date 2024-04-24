

interface Props{
  isFirstGame : boolean
  setIsFirstGame: React.Dispatch<React.SetStateAction<boolean>>;
  setGameStart:React.Dispatch<React.SetStateAction<boolean>>;
}

const GameButton = ({isFirstGame, setIsFirstGame, setGameStart}:Props) => {

  const handleClick = (e : any) => {
    setIsFirstGame(false); 
    setGameStart(true)
    e.target.blur();
  }
  return (
    isFirstGame? <button onClick={handleClick}>Start Game</button> : <button>Restart game</button>  )
}

export default GameButton