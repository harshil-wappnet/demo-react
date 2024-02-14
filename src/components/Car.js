// import Content from "./Content";
const Car = (props) => {
    // const feature = { engine: "VCT V8 Engine", seats: "4" };
    console.log({ props })
    return (
        <>

            {/* <h1> This is Car Component.</h1>
            <p>Props are getting imported from App Component.</p>
            <p>Brand of car is {props.brand}</p>
            <p>Name of car is {props.car}</p>
            <p>Model of car is {props.model}</p>
            <Content specifies={feature} name={props.car} /> */}
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Name</th>
                </tr>
                {props.cars.map((item) => (
                    <tr>
                        <td>{item.brand}</td>
                        <td>{item.car}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default Car;
// import { useState } from 'react';

// export default function Form() {
//     const [name, setName] = useState('Taylor');
//     const [age, setAge] = useState(42);

//     return (
//         <>
//             <input
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//             />
//             <button onClick={() => setAge(age + 1)}>
//                 Increment age
//             </button>
//             <p>Hello, {name}. You are {age}.</p>
//         </>
//     );
// }


