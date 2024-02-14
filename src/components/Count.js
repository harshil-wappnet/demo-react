function Count({ count, onIncrement }) {
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={onIncrement}>Increment</button>
        </>
    )
}

export default Count;