import React, { useEffect, useState } from "react"
import axios from 'axios'
export const CurrentUserLoader = ({children}) =>{
    const [user, setUser] = useState(null)
    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("https://super-duper-fortnight-x55w67g5xwwjf96x6-9090.app.github.dev/current-user")
            setUser(response.data)
        })()
    }, [])
    return(
<>
{React.Children.map(children, (child) =>{
    if(React.isValidElement(child)){
        return React.cloneElement(child, {user})
    }
    return child;
})}
</>
    )
}