import axios from "axios";
const url = "http://localhost:3001/api/persons";
/* https://fathomless-scrubland-33652.herokuapp.com/api/persons */

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

export const edit = (id, newPerson) => {
  const request = axios.put(`${url}/${id}`, newPerson);
  return request.then((res) => res.data);
};
