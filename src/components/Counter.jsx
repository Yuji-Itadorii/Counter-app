import React, { useState } from "react";


function Counter() {

    const [headingText , setHeadingText] = useState("Tally Counter");
    const [count , setCount] = useState(0);
    const [ishidden , setishidden] = useState(true);
    const [ishidden2 , setishidden2] = useState(true);
    const [start , setStart] = useState(0);
    const [counterInput , setCounterInput] = useState("");
    const [startText , setStartText] = useState("Start Value");
    const [counterText , setCounterText] = useState("Counter name");

    function changeCount(e){
        if(e.target.name === "add"){
            var val = Number(count);
            setCount(val+1);
        }
        else if(e.target.name === "sub"){
            var vsl = Number(count);
            setCount(vsl-1);
        }
        else if(e.target.name === "reset"){
            setCount(0);
        }
    }



    function setStartvalue(e){

        if(e.target.name === "start"){
            if(ishidden === true){
                setStartText("Set")
            }
            else{
                setStartText("Start Value")
            }
    
            setishidden(!ishidden);
            setCount(start);
        }
        else if(e.target.name === "counter"){
            if(ishidden2 === true){
                setCounterText("Set")
            }
            else{
                setCounterText("Counter Text")
            }

            setishidden2(!ishidden2);
            setHeadingText(counterInput);

        }

        
    }




    return (
        <div className="counter element container">
            <h3>{headingText}</h3>
            <input type="number" value={count} readOnly onChange={(e)=>{setCount(e.target.value)}} />
            <button onClick={changeCount} name="add">+</button>
            <button onClick={changeCount} name="sub" >-</button>
            <button onClick={changeCount} name="reset" >Reset Counter</button>
            <input type="text" hidden={ishidden} onChange={(e)=>{setStart(e.target.value)}} placeholder="Enter staring value" value={start} />
            <button onClick={setStartvalue} name="start" >{startText}</button>
            <input type="text" hidden={ishidden2} onChange={(e)=>{setCounterInput(e.target.value)}} placeholder="Enter staring value" value={counterInput} />
            <button onClick={setStartvalue} name="counter" >{counterText}</button>
        </div>
    );
}

export default Counter;