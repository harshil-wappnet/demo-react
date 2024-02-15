// import { Form } from "formik";
import { useState } from "react";
const Forms = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [inputs, setInputs] = useState({});
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        setInputs({});
        // console.log(email);
        // setName("");
        // setEmail("");

    }

    const handleChange = (e) => {
        // setName(document.getElementById("name").value);
        // setName(e.target.value);
        const keys = e.target.name;
        const values = e.target.value;
        setInputs((prevValues) => ({ ...prevValues, [keys]: values }))
    }
    return (
        <>
            <h1>Form Components</h1>
            <form onSubmit={handleSubmit} autoComplete="on">
                <label>Name
                    <input
                        type="text"
                        name="userName"
                        value={inputs.userName || ""}
                        id="name"
                        // Updates the input field on changing  text in it
                        onChange={handleChange} />
                </label><br />
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange} />
                </label><br />
                <label>Address
                    <textarea
                        style={{ resize: 'none' }}
                        type="textarea"
                        name="address"
                        value={inputs.address || ""}
                        onChange={handleChange}
                        rows={4} cols={50} />
                </label><br />
                <select value={inputs.car || ""} name="car" onChange={handleChange}>
                    <option value="Select">Select</option>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select><br />
                <label>Password
                    <input
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        placeholder="Enter Passcode"
                        onChange={handleChange} />
                </label><br />
                <label>Date
                    <input
                        type="date"
                        name="date"
                        value={inputs.date || ""}
                        onChange={handleChange} />
                </label><br />
                <label>File
                    <input
                        type="file"
                        name="myfile"
                        accept=".jpg,.png"
                        value={inputs.myfile || ""}
                        onChange={handleChange} />
                </label><br />
                <label>Time
                    <input
                        type="time"
                        name="time"
                        value={inputs.time || ""}
                        onChange={handleChange} />
                </label><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Forms;