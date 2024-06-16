/* eslint-disable react/prop-types */
import { TextField } from "@mui/material"
import { useState } from "react"
import { loginUser, signupUser } from "../Helper/Helper"
import { NoteState } from "../Context/appCtx"
const Form =({btnName})=>{
const [username,setUserName]=useState("")
const [email,setEmail]=useState("") 
const [password,setPassword]=useState("")
const [msg,setMsg]=useState("");
const [err,setErr]=useState("")
const {setToken}=NoteState()
const handleLogin=()=>{
   const userData={
      name:username,
      email,
      password,
   }
   loginUser(userData).then((data)=>{
      if(data.error){
         setErr(data.error);
         setMsg("")
      }
      else{
         localStorage.setItem("token",data.token)
         setToken(data.token);
         setErr("")
         setMsg(data.data)
      }
   }).catch((err)=>console.log(err))
};
   const handleSignup=()=>{
      const userData={
         name:username,
         email,
         password,
      }
      signupUser(userData).then((data)=>{
         if(data.error){
            setErr(data.error);
            setMsg("")
           
         }
         else{
            setErr("")
         setMsg(data.data)
         }
      }).catch((err)=>console.log(err))
};
    return(
      <div>
        <div className="Form">
         <TextField
            id="outlined-basic1"
           label="username"
            variant="outlined"
             value={username} 
             onChange={(e)=>setUserName(e.target.value)} />
           <TextField 
           id="outlined-basic2"
            label="email"
             variant="outlined" 
             value={email} 
             onChange={(e)=>setEmail(e.target.value)} />
           <TextField 
           id="outlined-basic3"
            label="password" 
            variant="outlined"
            type="password"
             value={password} 
             onChange={(e)=>setPassword(e.target.value)}/> 
           <button onClick= {btnName==="Login" ? handleLogin : handleSignup}>
           {btnName}</button>
           <div>
           <div style={{color:"teal"}}>{msg ? msg:""}</div>
           <div style={{color:"crimson"}}>{err ? err:""}</div>
           </div>
        </div>
        </div>
      )
 }

 export default Form