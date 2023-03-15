import axios from "axios"


const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)


export const todoListWithUsernameApi = (username) => apiClient.get(`/users/${username}/todo`)

export const deleteTodoApi = (username, id) => apiClient.delete(`/users/${username}/todo/${id}`)

export const retrieveSpecificTodoApi = (username, id) => apiClient.get(`/users/${username}/todo/${id}`)

export const updateSpecificTodoApi = (username, id, todo) => apiClient.put(`/users/${username}/todo/${id}`, todo)

export const createTodoApi = (username, todo) => apiClient.post(`/users/${username}/todo`, todo)

