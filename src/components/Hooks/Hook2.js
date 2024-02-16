import { useEffect, useState } from "react";

const Hook2 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const counter = setTimeout(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(counter)
    }, [])
    return (
        <>
            <h1>Hook2: useEffect</h1>
            <p>{count}</p>
        </>
    )
}

export default Hook2;