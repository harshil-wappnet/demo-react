import './App.css';
import Classhello from './components/Classhello';
import Animal from './components/ES6/Animal';
function App() {
  // ES6 classes
  class Human {
    constructor(person, age) {
      this.person = person;
      this.age = age;
    }
    greetings() {
      return <h3>Hi! I am {this.person} and I'm {this.age}</h3>;
    }
  }
  let john = new Human("john", 20);
  return (
    <div className="App">
      <Classhello />
      <h2>{john.person} is {john.age} years old.</h2>
      {john.greetings()}
      <Animal legs="4" />
    </div>
  );
}

export default App;
