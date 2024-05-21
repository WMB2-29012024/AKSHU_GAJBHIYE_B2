import React from 'react'

const MyBtn = ({name,click}) => {
  return (
    <div>
        <button onClick={click}> {name} </button>
    </div>
  )
}

export default MyBtn