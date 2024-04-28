import React from 'react'

interface typeProps{
  setPlayers: React.Dispatch<React.SetStateAction<{
    x: string;
    o: string;
}>>
}


const PlayerInput = ({setPlayers}: typeProps) => {

  //changes the names in the setplayer state so the game knows the players name.
  const handleChange = (e:any)=>{
    const name:string = e.target.value;
    const xo:string = e.target.id
    setPlayers((prev)=>({...prev, [xo]: name}))
  }
  
  return (
    <form className='playerForm'>
      <div className='formElements'>
      <label htmlFor={"x"}>player X: </label><input onChange={handleChange} id="x" type='text'/>
      </div>
      <div className='formElements'>
      <label htmlFor={"o"}>player O: </label><input onChange={handleChange} id="o" type='text'/>
      </div>
    </form>
  )
}

export default PlayerInput