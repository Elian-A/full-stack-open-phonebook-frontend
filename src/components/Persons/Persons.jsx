import React from "react";

const Persons = ({ persons, phoneFilter, deletePersonPhone }) => {
  const filteredPersons = persons.filter(({ name }) => {
    name = name.toLowerCase();
    return name.includes(phoneFilter.toLowerCase());
  });
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {!phoneFilter
          ? persons.map((person) => (
              <div key={person.id}>
                <li>{`${person.name}  ${person.number}`}</li>
                <button
                  onClick={() => deletePersonPhone(person.id, person.name)}
                >
                  delete
                </button>
              </div>
            ))
          : filteredPersons.map((person) => (
              <div key={person.id}>
                <li>{`${person.name}  ${person.number}`}</li>
                <button
                  onClick={() => deletePersonPhone(person.id, person.name)}
                >
                  delete
                </button>
              </div>
            ))}
      </ul>
    </div>
  );
};

export default Persons;
