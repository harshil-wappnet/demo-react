import { useEffect, useRef, useState } from "react";

const Hook3 = () => {
    const [inputs, setInputs] = useState("");
    const prevValue = useRef("");

    useEffect(() => {
        prevValue.current = inputs;
    }, [inputs])
    return (
        <>
            <input
                type="text"
                value={inputs}
                onChange={(e) => setInputs(e.target.value)} />
            <p>Current: {inputs}</p>
            <p>Previous: {prevValue.current}</p>
        </>
    );
}

export default Hook3;

// If you try to access myRef.current before the component renders, it will be null because the ref is initially set to null. The useEffect is only executed after the initial render.
// If you access myRef.current after the component has rendered, it will contain the reference to the DOM element