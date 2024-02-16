import './App.css';
import Index from './Routes/Index';
// import Hook8 from './components/Hooks/Hook8';
// import Hook7 from './components/Hooks/Hook7';
// import Hook6 from './components/Hooks/Hook6';
// import Hook5 from './components/Hooks/Hook5';
// import Hook4 from './components/Hooks/Hook4';
// import Hook3 from './components/Hooks/Hook3';
// import Hook2 from './components/Hooks/Hook2';
// import Hook1 from './components/Hooks/Hook1';
// import Forms2 from './components/Forms/Forms2';
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
      <p>Welcome to App Component</p>
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
      {/* <Forms2 /> */}
      {/* <Hook1 /> */}
      {/* <Hook2 /> */}
      {/* <Hook3 /> */}
      {/* <Hook4 /> */}
      {/* <Hook5 /> */}
      {/* <Hook6 /> */}
      {/* <Hook7 /> */}
      {/* <Hook8 /> */}
      <Index />
    </div>
  );
}

export default App;
