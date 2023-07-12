import React, { useState } from "react";
import { signInWithEmailAndPassword , signInWithPopup } from "firebase/auth";
import { auth , googleProvider } from "../config/firebase";
import { useNavigate } from 'react-router-dom';


function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const logIn = async ()=>{
        try {
          
            await signInWithEmailAndPassword(auth, email , password);
            navigate('/home')

          } catch (err) {
            console.error(err);
            alert(`${err}`);
          }
    }

    const signInWithGoogle = async () => {
      try {
        
        await signInWithPopup(auth, googleProvider);
        
        alert("Sign In successfull!!");
        navigate("/home");
  
      } catch (err) {
        console.error(err);
        alert(`${err}`);
      }
    };

    return(<div>
        <input
          className="element"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="element"
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="element" onClick={logIn}> Login</button>

        <button className="element" onClick={signInWithGoogle}> Sign In With Google</button>
    </div>);
}


export default Login;