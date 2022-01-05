
import { useState } from "react"
import { AuthContext } from "../context/context"





export const AuthProvider = (children:any) => {

    const [user, setUser] = useState <object|null> (null)

    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}