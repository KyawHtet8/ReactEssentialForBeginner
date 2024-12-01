import {useState} from "react";

export const UserStateComponent = () => {
     const [counter, setCounter] = useState(0);

     const decrementHandler = () => {
         if (counter > 0) {
             setCounter(counter - 1)
         }
     }


    return (
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}> + </button>
            <button onClick={decrementHandler}>-</button>
            <button onClick={() => setCounter(0) }>Reset</button>
        </>
    )
}