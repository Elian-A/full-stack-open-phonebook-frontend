import axios from "axios";
import { useEffect, useState } from "react";
import { Filter, Persons, PersonForm } from "./components";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const url = "http://localhost:3001/persons";
  useEffect(() => {
    axios.get(url).then((res) => setPersons(res.data));
  }, []);

  const createPerson = (newPerson) => {
    axios.post(url, newPerson);
  };

  return (
    <div>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        createPerson={createPerson}
      />
      <Filter filter={filter} setFilter={setFilter} />
      <Persons persons={persons} setPersons={setPersons} filter={filter} />
    </div>
  );
};

export default App;
