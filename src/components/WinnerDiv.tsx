
interface typeProps{
  win: string
}

const WinnerDiv = ({win}:typeProps) => {
  return (
    <h1>{win} is the winner!</h1>
  )
}

export default WinnerDiv