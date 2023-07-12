import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { redirect} from "react-router-dom";


function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async ()=>{
        try {
          
            await signInWithEmailAndPassword(auth, email , password);
            redirect("/home");

          } catch (err) {
            console.error(err);
            alert(`${err}`);
          }
    }

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
    </div>);
}


export default Login;