import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)

    async function getTheData(address) {
        let res = await fetch(address)
        let d = await res.json()
        setdata(d)
    }

    useEffect(() => {
        try {
            getTheData(url)
        } catch (error) {
            seterror(error)
        }
    }, [url])

    return { data, error }

}