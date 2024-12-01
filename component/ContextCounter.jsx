import {useContext} from "react";
import {CounterContext} from "../src/App.jsx";

export const ContextCounter = () => {
    const {counter,increment,decrement,reset} = useContext(CounterContext);
    return (
        <>
            <h1>Context Counter :: {counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}