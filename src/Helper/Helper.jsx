import { MainAPI } from "./API"

export const signupUser=async(userData)=>{
  try {
    const res=await fetch(`${MainAPI}/signup`,{
        method:"POST",
        body:JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json",
        },
    });
    const data=res.json();
    return data;
  } catch (error) {
    return(error)
    
  }  
}
export const loginUser=async(userData)=>{
    try {
        const res =await fetch(`${MainAPI}/login`,{
         method:"POST",
         body:JSON.stringify(userData),
         headers:{
            "Content-Type":"application/json",
         }, 
        })
        const data=res.json();
         return data;
    } catch (error) {
        return error;
    }
}