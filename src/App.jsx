import React from 'react'
import "./App.css"
import "./scroll.css"
import { useState, useEffect } from 'react'
const App = () => {
  const [data, setdata] = useState([])
  const [scrolled, setscrolled] = useState(0)
  async function getData() {
    let d = await fetch("https://dummyjson.com/products?limit=100")
    let res = await d.json()
    setdata(res.products)
  }
  useEffect(() => {
    getData()
  }, [])


  function onScroll() {
    let topdone = document.documentElement.scrollTop;
    let maxheight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrper = (topdone / maxheight) * 100
    let scrperval = Math.floor(scrper)
    setscrolled(scrperval)
  }



  window.addEventListener("scroll", onScroll)


  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <div className="scrollindibox">
        <div className="scrollindi" style={{ width: `${scrolled}%`, backgroundColor: "green" }}>{scrolled}%</div>
      </div>
      <h1>Scroll indicator</h1>

      {
        data.length > 0 ?
          data.map((item) => {
            return <div>{item.title}</div>
          })
          : "loading..."
      }
    </div>
  )
}

export default App


//https://dummyjsolaskdlan.com/products?limit=50