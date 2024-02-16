import useCustom from "./useCustom";
const Hook8 = () => {
    const [count, Increment, Decrement] = useCustom();
    return (
        <>
            <h1>Hook8: Custom Hook</h1>
            <p>{count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}

export default Hook8;