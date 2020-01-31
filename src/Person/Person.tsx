import React from 'react';
import PersonModel from '../Models/PersonModel';
import VoidClickable from '../Models/VoidClickable';
import FormInputChanged from '../Models/FormInputChanged';

interface PersonComp extends PersonModel, VoidClickable, FormInputChanged {}

const Person: React.FC<PersonComp> = props => {
  return (
    <div className="max-w-md mx-auto border-2 border-gray-400 shadow-lg px-4 py-4 rounded-lg mt-4 text-center">
      <p onClick={props.click}>
        I'm a Person and I am {props.name} {Math.floor(+props.age)} years old!
      </p>
      <p>{props.children}</p>
      <input
        type='text'
        onChange={props.changed}
        value={props.name}
        className='max-w-xs mx-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
    </div>
  );
};

export default Person;
