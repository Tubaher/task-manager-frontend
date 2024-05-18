import axios from 'axios';

const API_URL = 'http://127.0.0.1:9000/tasks';

export const getTasks = () => axios.get(API_URL);
export const createTask = async (title) => { 
    console.log(title);
    console.log(API_URL);
    const res = await axios.post(API_URL, { title }, { headers: { 'Content-Type': 'application/json' } });
    console.log(res);
    return res; };
export const completeTask = (id) => axios.put(`${API_URL}/${id}`);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);