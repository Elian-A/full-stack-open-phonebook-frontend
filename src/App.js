import { useEffect, useState } from "react";
import { Filter, Persons, PersonForm } from "./components";
import { getAll, create, deletePerson } from "./services/personServices";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [phoneFilter, setPhoneFilter] = useState("");

  useEffect(() => {
    getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const createPerson = (newPerson) => {
    create(newPerson).then((createdPerson) => {
      setPersons([...persons, createdPerson]);
      setNewName("");
      setNewNumber("");
    });
  };

  const deletePersonPhone = (id) => {
    const deletedPerson = persons.filter((person) => person.id === id);
    const confirmation = window.confirm(`Delete ${deletedPerson[0].name}`);
    if (!confirmation) return;
    deletePerson(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  return (
    <div>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        createPerson={createPerson}
      />
      <Filter phoneFilter={phoneFilter} setPhoneFilter={setPhoneFilter} />
      <Persons
        persons={persons}
        phoneFilter={phoneFilter}
        deletePersonPhone={deletePersonPhone}
      />
    </div>
  );
};

export default App;
