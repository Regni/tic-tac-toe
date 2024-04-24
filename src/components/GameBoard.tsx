
import { GameSquare } from './GameSquare'
const GameBoard = () => {
  return (
    <div className='gameContainer'>
      <div className="row">
        <GameSquare/>
        <GameSquare/>
        <GameSquare/>
      </div>  
      <div className="row">
        <GameSquare/>
        <GameSquare/>
        <GameSquare/>
      </div>  
      <div className="row">
        <GameSquare/>
        <GameSquare/>
        <GameSquare/>
      </div>  
    </div>
  )
}

export default GameBoard