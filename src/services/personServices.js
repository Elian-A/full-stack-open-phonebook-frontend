import axios from "axios";
const url = "http://localhost:3001/persons";

export const getAll = () => {
  const request = axios.get(url);
  return request.then((res) => res.data);
};

export const create = (newPerson) => {
  const request = axios.post(url, newPerson);
  return request.then((res) => res.data);
};

export const deletePerson = (id) => {
  const request = axios.delete(`${url}/${id}`);
  return request.then((res) => res.data);
};
