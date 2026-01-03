import { useEffect, useState } from "react";

function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    navigate=useNavigate()
    const[message,setMessage]=useState("")
    const emailRef=useRef(null)
    useEffect(()=>{
        emailRef.current.focus();
    },[])
    const handlelogin=(e)=>{
        e.preventDefault();
        if(e)
    }
    return(

    )
}
export default Login;