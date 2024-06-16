/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteCtx =createContext(null);
const AppProvider=({ children })=>{
 const navigate=useNavigate();
 useEffect(()=>{
    if(!localStorage.getItem("token")){
        navigate("/register",{replace:true})
    }
 },[navigate]);
const [token,setToken]=useState("")
 return(
<div>
    <NoteCtx.Provider value={{token,setToken}}> {children} </NoteCtx.Provider>
</div>
 );
};
export const NoteState=()=>{
    return useContext(NoteCtx);
}
export default AppProvider;