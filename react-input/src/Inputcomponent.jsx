import React from 'react'

const Inputcomponent = ({setTextvalue}) => {



  return (
    <div>
        <input type="text" onChange={(e)=>setTextvalue(e.target.value)} />
    </div>
  )
}

export default Inputcomponent