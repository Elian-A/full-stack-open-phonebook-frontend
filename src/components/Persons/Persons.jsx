import React from "react";

const Persons = ({ persons, filter }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div>
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

export default Persons;
