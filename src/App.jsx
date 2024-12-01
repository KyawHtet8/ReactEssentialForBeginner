import './App.css'
import {UserStateComponent} from "../component/UserStateComponent.jsx";
import {UseStateArrayComponent} from "../component/UseStateArrayComponent.jsx";
import {UseEffectDemo} from "../component/UseEffectDemo.jsx";
import {createContext, useContext, useEffect, useState} from "react";
import {ComponentC} from "../component/ComponentC.jsx";
import {ContextCounter} from "../component/ContextCounter.jsx";
import {UserReducerComponent} from "../component/UseReducerComponent.jsx";

export const GreetingContext = createContext();
export const CounterContext = createContext({
    counter: 0,
    increment: () => {
    },
    decrement: () => {
    },
    reset: () => {
    },
})

export default function App() {

    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };
    const reset = () => setCounter(0);

    //Wrap in the contextValue
    const counterContextValue = {
        counter,increment,decrement,reset
    };


    return (
        <>
            {/*        <h1>Hello UseState Hook</h1>*/}
            {/*<UserStateComponent></UserStateComponent>*/}

            {/*<h1>Use State Arrays Component</h1>*/}
            {/*<UseStateArrayComponent></UseStateArrayComponent>*/}


            {/*<h1>Use Effect Demo</h1>*/}
            {/*<UseEffectDemo/>*/}


            {/*<GreetingContext.Provider value={"Hello World"}>*/}
            {/*    <ComponentC></ComponentC>*/}
            {/*</GreetingContext.Provider>*/}

             {/*<CounterContext.Provider value={counterContextValue}>*/}
             {/*   <ContextCounter></ContextCounter>*/}
             {/*</CounterContext.Provider>*/}

            <UserReducerComponent></UserReducerComponent>

        </>
    )
}

