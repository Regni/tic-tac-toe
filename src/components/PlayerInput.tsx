import React from 'react'

const PlayerInput = () => {
  return (
    <form className='playerForm'>
      <div className='formElements'>
      <label htmlFor={"X"}>player X </label><input id="X" type='text'/>
      </div>
      <div className='formElements'>
      <label htmlFor={"O"}>player O </label><input id="O" type='text'/>
      </div>
    </form>
  )
}

export default PlayerInput