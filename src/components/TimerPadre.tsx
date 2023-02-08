import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = ()=>{

    const [milisegundos, setMilisegundos] = useState(1000)

    return(
        <>
        <span> Milisegundos {1000}</span>
        <Timer milisegundos={milisegundos}/>
        </>
    )
}