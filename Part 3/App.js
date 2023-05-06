import React from 'react';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <Person
        name="Jonathan"
        age={22}
        hobbies={['Reading', 'Hiking', 'Gaming']}
      />
      <Person
        name="Samantha"
        age={16}
        hobbies={['Photography', 'Traveling', 'Cooking']}
      />
      <Person
        name="Alexander"
        age={35}
        hobbies={['Coding', 'Biking', 'Swimming']}
      />
    </div>
  );
}

export default App;
