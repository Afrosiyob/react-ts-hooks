import { createContext } from "react"



type UserType  = {
    name:String,
    age:Number
}

export const AuthContext = createContext<object>({
    name:"user",
})