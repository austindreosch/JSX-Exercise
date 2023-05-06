function Person({ name, age, hobbies }) {
  let shortName;
  if (name.length > 8) {
    shortName = name.substring(0, 6) + '...';
  } else {
    shortName = name;
  }


  return (
    <div className="person">
      <p>Learn some information about this person.</p>
      <p>Name: {shortName}</p>
      <p>Age: {age}</p>
      <h3>{age >= 18 ? 'Please go vote!' : 'You must be 18'}</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Person;