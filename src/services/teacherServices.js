import axios from "axios";

const API = axios.create({
    baseURL: "http://instituto"
});
export const getTeachers = () => API.get("/teachers");

export const saveTeacher = (params) => API.post("/teacher", params);

export const deleteTeacher = (id) => API.delete(`/teacher${id}`);

export const editTeacher = (id, params) => API.put(`/teacher/${id}`, params);

export const getUniqueTeacher = (id) => {
    return API.get(`/teacher/${id}`);
};


export default API;
