import React from "react";

function Animal(props) {
    const animal_names = ["lion", "cat", "tiger", "dog", "hippo"]; // Array of functions that return the name of each animal.

    // map() 
    const names = animal_names.map((item) => {
        return <li key={item}>{item}</li>
    })
    // destructuring arrays
    const [value1, value2] = animal_names;

    // objects
    const obj1 = {
        toy: "Wooden",
        price: 100
    };

    const obj2 = {
        color: "Brown",
        weight: "200 kg"
    };

    // Spread operator to combine obj1 and obj2
    const combinedObj = { ...obj1, ...obj2 };

    const obj = Object.keys(combinedObj).map((items) => {
        return <span key={items}> {items}:{combinedObj[items]} <br /> </span>
    });

    //ternary operator
    const message = ("hen" in animal_names) ? <h4>Searched item present</h4> : <h4>Searched item  not present</h4>

    // arrow function
    const carnivores = () => {
        return <ol>{names}</ol>
    }
    return (
        <div>
            <h2>Animal Page from functional components</h2>
            <p>Here is the animal components</p>
            {carnivores()}
            <p>{value1} and {value2} obtained from destructuring arrays</p>
            <h6>{message}</h6>
            {obj}
        </div>
    )
}

export default Animal;
