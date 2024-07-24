import { useEffect } from "react";



export default function useOutsideClick(ref, handler) {
    useEffect(() => {

        function listener(event) {
            handler(event)
        }

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
    }, [ref, handler])
}




// useOutsideClick2