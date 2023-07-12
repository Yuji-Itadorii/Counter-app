import React from "react";
import {signOut} from "firebase/auth";
import { auth} from "../config/firebase";
import {  useNavigate } from "react-router-dom";




function Logout() {

    const navigate = useNavigate()

    const logout = async () => {
        try {
            await signOut(auth);
            navigate('/')
        } catch (err) {
            console.error(err);
            alert(`${err}`);
        }
    };

    return (
        <div>
            <button className="element" onClick={logout}> Logout </button>
        </div>
    );
}

export default Logout;