import {useEffect, useState} from "react";

type TimerArgs = {
    milisegundos: number,
    
}
export const Timer = ({milisegundos}: TimerArgs)=> {

    const [segundos, setSegundos] = useState (0)

    useEffect (()=> {
        setInterval ( ()=> setSegundos ( s => segundos + 1), 1000 );
    }, [milisegundos])

    return(
        <>
        <h4>Timer: <small>{segundos}</small></h4>
        </>
    )

}