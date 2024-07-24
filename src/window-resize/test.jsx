

import React from 'react'
import useWindowResize from './windowResize'
const UseWindowResizeHookTest = () => {
    const {width, height} = useWindowResize()
  return (
    <div>
        <h1>Width and height of your device:</h1>
      <div>{width}</div>
      <div>{height}</div>
    </div>
  )
}

export default UseWindowResizeHookTest
