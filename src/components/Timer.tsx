import {useState} from "react";

export const Timer = ()=> {

    const [segundos, setSegundos] = useState (0)

    return(
        <>
        <h4>Timer: <small>{segundos}</small></h4>
        </>
    )

}