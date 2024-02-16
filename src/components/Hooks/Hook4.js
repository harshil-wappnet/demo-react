import { useContext, useState, createContext } from "react";
const UserContext = createContext();
const Hook4 = () => {
    const [cars, setCars] = useState([
        {
            brand: "Ford",
            model: "Mustang",
            color: "black"
        },]);
    const [users, setUsers] = useState("Julliet");
    return (
        <>
            <UserContext.Provider value={{ cars, users, setUsers }}>
                <h1>Hook4: useContext</h1>
                <Component1 />
            </UserContext.Provider>
        </>
    )
}

const Component1 = () => {
    return (
        <>
            <p>Component1 is here</p>
            <Component2 />
        </>
    )
}

const Component2 = () => {
    return (
        <>
            <p>Component2 is here</p>
            <p>Here  is the value from Context: </p>
            <Component3 />
        </>
    )
}

const Component3 = () => {
    const { users, setUsers } = useContext(UserContext);

    const abc = () => {
        setUsers("harshil")
    }
    return (
        <>
            <p>Component3 is here</p>
            <p>User name: {users}</p>
            <button onClick={abc}>
                User Name
            </button>
            <Component4 />
        </>
    );
};

const Component4 = () => {
    const { cars } = useContext(UserContext);
    return (
        <>
            <p>Component4 is here</p>
            <p>Here  is the value from Context: </p>
            {cars.map((item, index) => {
                return <ul key={index}>
                    <li>Car brand is: {item.brand}</li>
                    <li>Car model is: {item.model}</li>
                    <li>Car color is: {item.color}</li>
                </ul>
            })}
        </>
    )
}
export default Hook4;