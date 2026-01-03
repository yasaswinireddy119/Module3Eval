import { useEffect, useState } from "react";

function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate()
    const[message,setMessage]=useState("")
    const[isLoggedin,setIsLoggesin]=useState(false)
    const emailRef=useRef(null)
    useEffect(()=>{
        emailRef.current.focus();
    },[])
    const handlelogin=(e)=>{
        e.preventDefault();
        if(email==="admin@gmail.com"&&password==="admin1234"){
             
              navigate("/admin")
              navigate("/customer")
        }
        else{
            setMessage("Inavalid email or password")
        }
          
    }
    
    return(
        <div className="container">
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

                <button type="submit">Login</button>
            </form>
            
        </div>

    )
}
export default Login;