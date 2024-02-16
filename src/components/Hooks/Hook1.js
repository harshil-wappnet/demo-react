import { useState } from "react";

const Hook1 = () => {
    const [car, setCar] = useState([
        {
            brand: "Ford",
            model: "Mustang",
            color: "black",
            parts: {
                part1: "abc",
                part2: "xyz",
            },
        },
    ]);

    const handleChange = () => {
        setCar((val) =>
            val.map((ite) => ({
                ...ite,
                parts: {
                    ...ite.parts,
                    part1: "tyu",
                },
            }))
        );
    };

    console.log("car", car);
    return (
        <>
            <h1>Hook1: useState</h1>
            {car.map((item, index) => (
                <div key={index}>
                    <p>Brand: {item?.brand} </p>
                    <p>Model: {item?.model} </p>
                    <p>Color: {item?.color} </p>
                    <p>Part1: {item?.parts?.part1} </p>
                    <p>Part2: {item?.parts.part2} </p>
                </div>
            ))}
            <button onClick={handleChange}>Change color</button>
        </>
    );
};

export default Hook1;
