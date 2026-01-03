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
        if(email==="admin@gmail.com"&&password==="admin1234"){
              alert("Login Successful")
        }
        else{
            alert("Inavalid email or password")
        }
          
    }
    return(
        <div class="container">
            <h2>Login Page</h2>
            <form onSubmit={handlelogin}>
                <input
                type="email"
                placeholder="Email"
                ref={emailRef}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </form>
        </div>

    )
}
export default Login;