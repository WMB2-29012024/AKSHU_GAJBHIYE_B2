import React from 'react'

const Task = ({name}) => {
  return (
    <div>
        <h1 style={{fontSize:"3rem"}}>Hello <span style={{color:'red'}}> {name} </span> </h1>
    </div>
  )
}

export default Task