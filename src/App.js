import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let alreadyExist = false;

    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        alreadyExist = true;
      }
    });

    if (alreadyExist) return;

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const handleNameChange = (evt) => {
    setNewName(evt.target.value);
  };
  const handleNumberChange = (evt) => {
    setNewNumber(evt.target.value);
  };
  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
  };

  return (
    <div>
      <h2>Filter</h2>
      filter: <input onChange={handleFilterChange} value={filter} />
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {!filter
          ? persons.map((person) => (
              <li key={person.name}>{`${person.name}  ${person.number}`}</li>
            ))
          : filteredPersons.map((person) => (
              <li key={person.name}>{`${person.name}  ${person.number}`}</li>
            ))}
      </ul>
    </div>
  );
};

export default App;
