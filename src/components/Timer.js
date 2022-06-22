import React, {useEffect, useState} from "react";


const Timer = () => {
    const[date,setDate] =useState(new Date())
    const[counter,setCounter] = useState(0)
    useEffect(() => { 
    
   const intervalId = setInterval(() => {
        console.log(date.toLocaleString())
        setDate(new Date())
    },1000)

    return () =>{
        clearInterval(intervalId)
    }

   

    
    }), []




    const header = <h1> Timer {date.toLocaleString()}</h1>
    return (
        <div>
            {header}

            Counter: {counter}
            <button onClick={() => setCounter(counter=1)}> </button> 
        </div>
    )
}

export default Timer


