import {useContext} from "react";
import {GreetingContext} from "../src/App.jsx";

export const ComponentC = () => {

    const context = useContext(GreetingContext);
    return (
        <>
            <h1> From Context Value : {context}</h1>
        </>

    )
}