import { createContext } from "react"



export  type UserType  = {
    name: String,
    
}

export const AuthContext = createContext<UserType>({
    name:"user",
})