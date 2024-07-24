



import React from 'react'

const Popup = ({header, main, footer, open}) => {
  return (
    <div className={open} style={{border:"2px solid black", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", color: "white"}}>
      <div style={{backgroundColor:"green"}}>{header}</div>
      <div style={{color:"black"}}>{main}</div>
      <div style={{backgroundColor:"green"}}>{footer}</div>
    </div>
  )
}

export default Popup
