import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link , redirect } from "react-router-dom";







export const Auth = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      alert("Sign In successfull!!");
      redirect("/home");

    } catch (err) {
      console.error(err);
      alert(`${err}`);
    }
  };

  const signInWithGoogle = async () => {
    try {
      
      await signInWithPopup(auth, googleProvider);
      
      alert("Sign In successfull!!");
      redirect("/home");

    } catch (err) {
      console.error(err);
      alert(`${err}`);
    }
  };



  return (
      <div className="auth">
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
        <button className="element" onClick={signIn}> Sign In</button>

        <button className="element" onClick={signInWithGoogle}> Sign In With Google</button>

        <p>Already Registered?
          <Link to="/login" >
            Login
          </Link>
        </p>


      </div>
  );
};