import { useReducer } from "react";
const initialstate = 0;

const reducer = (state, action) => {
    switch (action) {
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        default:
            return state
    }
}
const Hook7 = () => {
    const [count, dispatch] = useReducer(reducer, initialstate);
    return (
        <>
            <h1>Counter Componenet</h1>
            <p>{count}</p>
            <button onClick={() => dispatch("Increment")}>Increment</button>
            <button onClick={() => dispatch("Decrement")}>Decrement</button>
        </>
    )
}

export default Hook7;