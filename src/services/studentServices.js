import axios from "axios";

const API = axios.create({
    baseURL: "http://instituto"
});
export const getStudents = () => API.get("/students");

export const saveStudent = (params) => API.post("/student", params);

export const deleteStudent = (id) => API.delete(`/student/${id}`);

export const editStudent = (id, params) => API.put(`/student/${id}`, params);

export const getUniqueStudent = (id) => {
    return API.get(`/student/${id}`);
};


export default API;
