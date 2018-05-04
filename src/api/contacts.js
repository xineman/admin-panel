import axios from '.';


export const getAll = () => axios.get('/contacts')
  .then(r => r.data)
  .catch(console.error); // eslint-disable-line
export const getOne = id => axios.get(`/contacts/${id}`)
  .then(r => r.data)
  .catch(console.error); // eslint-disable-line
export const create = () => axios.post('/contacts')
  .then(r => r.data)
  .catch(console.error); // eslint-disable-line
export const update = contact => axios.put(`/contacts/${contact.id}`, contact)
  .then(r => r.data)
  .catch(console.error); // eslint-disable-line
