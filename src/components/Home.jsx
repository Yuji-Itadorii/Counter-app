import React, { useState } from "react";
import Logout from "./Logout"
import Counter from "./Counter";

function Home() {

    const [counters  , setCounters] = useState([<Counter/>]);

    function handleClick(){
        var x = counters;
        x.push(<Counter/>);
        setCounters(x);
    }

    return (
        <div className="home">
            <Logout/>
            <button onClick={handleClick}>Add Counter</button>
            <div >
                {counters.map((conters , index)=>{ return (<Counter key={index} />) ;})}
            </div>
        </div>
    );
}

export default Home;