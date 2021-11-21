import { useEffect, useState } from "react"

const useFetch =() =>{
    const [servise, setServise] = useState([])
    useEffect(()=> {
        fetch('/servise.json')
        .then(res=> res.json())
        .then(data => setServise(data) )
    },[])


    return servise
}


export default useFetch


