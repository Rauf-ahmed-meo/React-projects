
import { useState, useRef } from 'react'
import React from 'react'
import useOutsideClick from './useOutsideClick'
const UseOutsideClickTest = () => {
    const [showData, setshowData] = useState(false)
    const ref = useRef()
    useOutsideClick(ref, ()=>{setshowData(false)})
  return (
    <div style={{border:"2px solid black"}}>
      {
        showData?
        <div ref={ref}><h1>I will disappear once you click outside😎</h1></div>
        :<button onClick={()=>{setshowData(true)}}>Show</button>
      }
    </div>
  )
}

export default UseOutsideClickTest
