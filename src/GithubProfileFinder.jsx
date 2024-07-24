
import { useState, useEffect } from 'react'
import React from 'react'

const GithubProfileFinder = () => {

    const [name, setname] = useState("")
    const [SearchName, setSearchName] = useState("Rauf-ahmed-meo")
    const [data, setdata] = useState({})

    async function getUserData(){
        let d = await fetch(`https://api.github.com/users/${SearchName}`)
        let res = await d.json()
        if(res){
            setdata(res)
            setname("")
        }
    }

    useEffect(()=>{
        getUserData()
    }, [SearchName])

  return (
    <div style={{border:"3px solid black"}}>
      <h1>GITHUB PROFILE FINDER</h1>
      <input type="text" 
      placeholder='name'
      value={name}
      onChange={(e)=>{setname(e.target.value)}}
      />
      <button onClick={()=>{setSearchName(name)}}>Search</button>


      {

      data? 
      <div style={{display:"flex", justifyContent:"center", textAlign:"center", flexDirection:"column"}}>
      <img src={data.avatar_url} alt="person pic" style={{width:"40vw", margin:"auto", display:"block", objectFit:"cover"}}/>
      <div>{data.login}</div>
      <div>{data.bio}</div>
      </div>
      :null

      }
    </div>
  )
}

export default GithubProfileFinder


//https://api.github.com/users/