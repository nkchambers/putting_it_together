import './App.css';
import PersonCardComponent from './components/PersonCardComponent';

function App() {
  console.log("hello react");

  /*const person1 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "black"
  }*/


  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        
        <hr />
          <PersonCardComponent firstName={ "Jane" } lastName={ "Doe" } age={ 45 } hairColor = { "Black" }/>
          <PersonCardComponent firstName={ "John" } lastName={ "Smith" } age={ 88 } hairColor = { "Brown" }/>
          <PersonCardComponent firstName={ "Millard" } lastName={ "Fillmore" } age={ 50 } hairColor = { "Brown" }/>
          <PersonCardComponent firstName={ "Maria" } lastName={ "Smith" } age={ 62 } hairColor = { "Brown" }/>
      </div>
    </fieldset>
  );
}

export default App;
