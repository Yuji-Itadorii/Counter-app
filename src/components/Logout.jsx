import React from "react";
import {signOut} from "firebase/auth";
import { auth} from "../config/firebase";
import {  redirect } from "react-router-dom";




function Logout() {

    const logout = async () => {
        try {
            await signOut(auth);
            redirect("/login");
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