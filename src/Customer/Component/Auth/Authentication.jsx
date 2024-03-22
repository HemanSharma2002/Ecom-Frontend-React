import React, { createContext, useContext, useState } from 'react'
import { createUserApi, loginApi, urlConstruction, urlDistruction } from './API'
const AuthContext=createContext()
export const useAuth=()=>useContext(AuthContext)
export default function Authentication  ({children})  {
    const [firstName,setFirstName]=useState()
    const [isAuthenticated,setAuthenticated]=useState(false)
    const[username,setUsername]=useState();
    function createUser(prop){
        createUserApi(prop).then((response)=>console.log(response)).catch((response)=>console.log(response))
        return true
    }
    async function login(prop)
    {
        try{console.log(prop)
        let token="Basic "+window.btoa(prop.username+":"+prop.password)
        console.log(token)
        await urlConstruction(token)
        token=await (await loginApi()).data.token
        console.log(token)
        urlDistruction(token)
        urlConstruction("Bearer "+token)
        setAuthenticated(true)
        setUsername(prop.username)
        return true
    }
        catch{
            console.log("error")
            return false
        }
    }
    function logout(){

    }
    return(
        <AuthContext.Provider value={{firstName,isAuthenticated,login,logout,username,createUser}}>
            {children}
        </AuthContext.Provider>
    )
}
