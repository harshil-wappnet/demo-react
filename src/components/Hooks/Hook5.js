import { useMemo, useState } from "react";

const Hook5 = () => {
    const [add, setAdd] = useState(0);
    const [subtract, setSubtract] = useState(100);

    const multiply = useMemo(() => {
        console.log("hellooooooooo")
        return add * 10;
    }, [add])
    const handleAddition = () => {
        setAdd(add + 10);
    }

    const handleSubtraction = () => {
        setSubtract(subtract - 10);
    }
    return (
        <>
            <h1>Hook5: useMemo</h1>
            {multiply}<br /><br />
            <button onClick={handleAddition}>Add</button> <span>{add}</span><br /><br />
            <button onClick={handleSubtraction}>Subtract</button><span>{subtract}</span><br />
        </>
    )
}

export default Hook5;