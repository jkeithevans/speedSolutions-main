import axios from 'axios';

const createNewUser = (payload) => axios.post('/createNewUser', payload);
const loginUser = (payload) => axios.post('/login', payload);
const attachEmail = (payload, id) => axios.post(`/sendEmailToSeller/${id}`, payload);
const removeViewedEmail = (id) => axios.get(`/email/${id}`);
const allParts = () => axios.get('/allParts');
const viewPart = (id) => axios.get(`/viewPart/${id}`);
const findByCategory = (category) => axios.get(`/parts/${category}`);
const addPart = (payload, id) => axios.post(`/addNewPart/${id}`, payload);

const apis = {
  createNewUser,
  loginUser,
  attachEmail,
  removeViewedEmail,
  allParts,
  viewPart,
  findByCategory,
  addPart,
};

export default apis;
