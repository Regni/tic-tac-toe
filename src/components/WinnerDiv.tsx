
interface typeProps{
  win: string
}
//title announcing winner
const WinnerDiv = ({win}:typeProps) => {
  return (
    <h1>{win} is the winner!</h1>
  )
}

export default WinnerDiv