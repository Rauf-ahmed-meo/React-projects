import React from 'react'
import TabM from './tabs/TabM'
import Popup from './Popup/Popup'
import { useState } from 'react'
import GithubProfileFinder from './GithubProfileFinder'
import SearchAutoComplete from './SearchAutoComplete'
import TicTacToe from './TicTacToe'
import UseFetchTest from './UseFetchHook/test'
import UseOutsideClickTest from './use-outside-click/test'
import UseWindowResizeHookTest from './window-resize/test'
const App = () => {
  const [pupvis, setpupvis] = useState(false)
  return (
    <>
    <TicTacToe/>
    <TabM/>
    <button onClick={()=>{setpupvis(!pupvis)}}>Show popup</button>
    <Popup header={"i am head"} main={"o iam main"} footer={"ha ha i am footer fool"} open={pupvis?"popdown": "popup"}/>
    <GithubProfileFinder/>
    <SearchAutoComplete/>
    <UseFetchTest/>
    <UseOutsideClickTest/>
    <UseWindowResizeHookTest/>
    </>
  )
}

export default App
