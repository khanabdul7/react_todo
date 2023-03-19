import axios from "axios"


export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)


export const todoListWithUsernameApi = (username) => apiClient.get(`/users/${username}/todo`,{ // we don't need to include authorization header anymore bcos of interceptor
    // headers:{    
    //     Authorization: 'Basic YWJkdWw6ZHVtbXk='
    // }
})

export const deleteTodoApi = (username, id) => apiClient.delete(`/users/${username}/todo/${id}`)

export const retrieveSpecificTodoApi = (username, id) => apiClient.get(`/users/${username}/todo/${id}`)

export const updateSpecificTodoApi = (username, id, todo) => apiClient.put(`/users/${username}/todo/${id}`, todo)

export const createTodoApi = (username, todo) => apiClient.post(`/users/${username}/todo`, todo)


// export const executeBasicAuthenticationService  //this api call is used for BASIC authentication
//     = (token) => apiClient.get(`/basicauth`,{
//         headers: {
//             Authorization: token
//         }
//     })

export const executeJWTAuthenticationService  //this api call is used for JWT authentication
    = (username, password) => apiClient.post(`/authenticate`,{username, password})