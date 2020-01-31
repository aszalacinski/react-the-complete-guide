import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import PersonModel from './Models/PersonModel';

const App: React.FC = () => {
  const [persons, setPersons] = useState<PersonModel[]>([
    { name: 'Aarron', age: '44' },
    { name: 'Eric', age: '42' },
    { name: 'Max', age: '30' }
  ]);

  const [otherState, setOtherState] = useState<string>('some other value');

  console.log(persons, otherState);

  const switchNameHandler = (name: string) => {
    setPersons([
      { name: name, age: '44' },
      { name: 'Bro', age: '42' },
      { name: 'Bud', age: '30' }
    ]);
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersons([
      { name: 'Aarron', age: '44' },
      { name: event.target.value, age: '42' },
      { name: 'Max', age: '30' }
    ]);
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }

  return (
    <div className='App'>
      <h1>Hi, I am a React App</h1>
      <p>This is really working</p>
      <button
        onClick={switchNameHandler.bind(null, 'Foo')}
        className='bg-gray-600 hover:bg-gray-400 text-white rounded-lg my-2 py-2 px-4 font-bold cursor-pointer'
        >
        Switch Name
      </button>
      <Person name={persons[0].name} age={persons[0].age} />
      <Person
        name={persons[1].name}
        age={persons[1].age}
        click={switchNameHandler.bind(null, 'Ski')}
        changed={nameChangeHandler.bind(null)}>
        My hobbies: Gaming
      </Person>
      <Person name={persons[2].name} age={persons[2].age} />
    </div>
  );
};

export default App;
