
import { useEffect, useState } from "react";
export default function useWindowResize(){
    const [windowSize, setwindowSize] = useState({
        width:0,
        height:0
    })

    function handleResize(){
        setwindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(()=>{
        handleResize()
        window.addEventListener("resize", handleResize)
    }, [])
return windowSize
}