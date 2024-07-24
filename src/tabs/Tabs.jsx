

import { useState } from 'react'

import React from 'react'
import "./../../src/App.css"
const Tabs = ({tabs}) => {

    const [currentTab, setcurrentTab] = useState(null)
    function handleClick(currentindex){
        setcurrentTab(currentindex)
    }

  return (
    <div style={{border:"2px solid black"}}>
        <h1 style={{display:"flex", justifyContent:"center"}}>Tabs</h1>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
      {
        tabs.map((item, index)=>{
            return <div style={{cursor:"pointer"}}>
                <div className={currentTab === index?"green":"red"}>
                <div onClick={()=>{handleClick(index)}}>{item.label}</div>
                </div>
            </div>
        })
      }
      </div>
                <main style={{display:"flex", justifyContent:"center", fontFamily:"fantasy", fontSize:"48px", alignItems:"center", alignContent:"center", padding:"34px"}}>
                    {
                        tabs[currentTab] && tabs[currentTab].desc
                    }
                </main>
    </div>
  )
}

export default Tabs
