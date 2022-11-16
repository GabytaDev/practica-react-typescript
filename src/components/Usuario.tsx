import { useState } from "react";
//las reglas que debe cumplir 

interface User {
    uid: string
    name: string
}

export const Usuario = ()=> {
    const [user, setUser] = useState<User>();

    const login = ()=>{
        setUser({
            uid: "4556",
            name: "juana"
        });
    }

    return (
        <div className="mt-5">
            <h3>Usuario : Usestate</h3>
            <button 
            onClick={login}
            className="btn btn-outline-primary">
                Login
            </button>
            {
                (!user)
                    ? <pre> No hay usuario</pre>
                    : <pre> {JSON.stringify(user)} </pre>
            }
            
        </div>
    )
}