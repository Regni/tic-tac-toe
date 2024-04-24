
interface Props{
  value : string
  handleClick: React.MouseEventHandler<HTMLButtonElement> 
}
export const GameSquare = ({value, handleClick}:Props) => {
  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
}
