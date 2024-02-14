import { useState } from "react";
function Content(props) {
    // let [tag, setTag] = useState("Car");
    let [buttonStyle, setButtonStyle] = useState({});
    const handleTouchStart = () => {
        setButtonStyle({ border: "1px solid red" });
    };
    return (
        <>
            <h1>Content Page from Content Component</h1>
            <h3>Welcome to {props.name} features Page</h3>
            <p>Seating  Capacity: {props.specifies.seats}</p>
            <p>Engine specifies: {props.specifies.engine}</p>
            {/* Always pass function instead of calling */}
            <button onMouseMoveCapture={handleTouchStart} style={buttonStyle}>Style</button >
        </>
    )
}

export default Content;