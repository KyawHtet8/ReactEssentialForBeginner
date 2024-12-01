import {useReducer} from "react";


const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case "increment":
            return state + 1;
            case "decrement":
                return state -1;
                case "reset":
                    return initialState;
                    default:
                        return state;
    }
}

export const UserReducerComponent = () => {

    const [counter, dispatch] = useReducer(reducer, initialState);



    return (
        <>
            <h1>Use Reducer Counter:: {counter}</h1>
            <button onClick={() => dispatch("increment")}>+</button>
            <button onClick={() => dispatch("decrement")}>-</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </>
    )
}
