
import { useState, useEffect } from 'react'
import React from 'react'

const SearchAutoComplete = () => {
    const [users, setusers] = useState([])
    const [searchParam, setsearchParam] = useState("")
    const [filteresUsers, setfilteresUsers] = useState([])
    async function getUsers(){
        let d = await fetch('https://dummyjson.com/users?limit=200')
        let res = await d.json()
        if(res){
            setusers(res.users)
        }
    }

    function handleClick(e){
        setsearchParam(e.target.innerText)
    }


    function handleChange(event){
        let query = event.target.value
        setsearchParam(query)
        if (query.length > 1) {
            let filteredData = users && users.length>0?
            users.filter((item)=> item.firstName.toLowerCase().indexOf(query.toLowerCase()) > -1 )
            :[]
            setfilteresUsers(filteredData)
        }
    }
    useEffect(()=>{
        getUsers()
    }, [])
  return (
    <div style={{border:"2px solid black", height:"34vh", overflow:"scroll", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center"}}>
        <h1>Names Auto Suggestion</h1>
        <input type="text" 
        placeholder='name'
        onChange={(e)=>{handleChange(e)}}
        value={searchParam}
        />

        {
            filteresUsers.map((item)=>{
                return <div onClick={(e)=>{handleClick(e)}}>{item.firstName}</div>
            })
        }
    </div>
  )
}

export default SearchAutoComplete
