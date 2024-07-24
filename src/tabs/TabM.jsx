
import React from 'react'
import Tabs from './Tabs'

const TabM = () => {

    function RandomTab(){
        return <div>i am a random tab</div>
    }


    let tabs = [
        {
            label: "tab1",
            desc: "i am tab 1"
        },
        {
            label:"tab2",
            desc:"i am tab2"
        },
        {
            label:"tab3",
            desc:<RandomTab/>
        }
    ]

  return (
    <div>
        <Tabs tabs={tabs}/>
    </div>
  )
}

export default TabM
