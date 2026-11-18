import axios from "axios";

const API = axios.create({
    baseURL: "http://instituto/api"
});
export const getTeachers = () => API.get("/teachers");

export const saveTeacher = (params) => API.post("/teachers", params);

export const deleteTeacher = (id) => API.delete(`/teachers${id}`);

export const editTeacher = (id, params) => API.put(`/teachers/${id}`, params);

export const getUniqueTeacher = (id) => {
    return API.get(`/teachers/${id}`);
};


export default API;
