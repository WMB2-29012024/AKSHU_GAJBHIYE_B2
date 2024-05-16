import React from 'react'
import { TextHeading } from './TextHeading'
import Heading from './Heading'

const MyCon = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'4px'}}>
        <Heading texxt={8} size={'sm'}/>
        <TextHeading texxt={"Assigned"} />
    </div>
  )
}

export default MyCon