import './App.css';
import Forms2 from './components/Forms/Forms2';
// import Forms1 from './components/Forms/Forms1';
// import Content from './components/Content';
// import Car from './components/Car';
// import GroceryList from './components/GroceryList';
// import Toolbar from './components/Toolbar';
// import EventHandlersExample from './components/EventHandlersExample'
// import { useState } from 'react';
// import Count from './components/Count';
// import Classhello from './components/Classhello';
// import Animal from './components/ES6/Animal';
function App() {
  // const [count, setCount] = useState(0);
  // const cars = [{ brand: "Ford", car: "Mustang" }, { brand: "Toyota", car: "Camry" }, { brand: "Hunfdai", car: "i10" }];
  // ES6 classes
  // class Human {
  //   constructor(person, age) {
  //     this.person = person;
  //     this.age = age;
  //   }
  //   greetings() {
  //     return <h3>Hi! I am {this.person} and I'm {this.age}</h3>;
  //   }
  // }
  // let john = new Human("john", 20);
  // function handleIncrement() {
  //   setCount(count + 1);
  // }
  return (
    <div className="App">
      {/* <Car cars={cars} /> */}
      {/* <Toolbar />
      <GroceryList />
      <EventHandlersExample /> */}
      {/* <Count count={count} onIncrement={handleIncrement} /> */}
      {/* <Classhello />
      <h2>{john.person} is {john.age} years old.</h2>
      {john.greetings()}
      <Animal legs="4" /> */}
      {/* <Forms1 /> */}
      <Forms2 />
    </div>
  );
}

export default App;
