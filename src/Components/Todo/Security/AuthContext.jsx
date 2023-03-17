import { createContext, useState, useContext } from 'react'
import { apiClient, executeJWTAuthenticationService } from '../Api/TodoApi'

// 1. creating AuthContext
export const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

// 2.  creating a provider method for our AuthContext,    or can use as value = {props.children} at line 11
// all the comps that are in <AuthContextProvider>  comps </AuthContextProvider> are received as children in below method.
export default function AuthContextProvider({ children }) {

    // 3. creating a state for use
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    // async function Login(username, password) {

    //     const baToken = 'Basic ' + window.btoa(username + ":" + password) //encoding string into token

    //     try {
    //         const response = await executeBasicAuthenticationService(baToken)

    //         if (response.status === 200) {
    //             setIsAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             apiClient.interceptors.request.use(  //creating an interceptor so that every req has token
    //                 (config) => {
    //                     console.log('interceptor')
    //                     config.headers.Authorization = baToken  //setting token as authorization
    //                     return config
    //                 }
    //             )

    //             return true
    //         } else {
    //             Logout()
    //             return false
    //         }
    //     } catch (error) {
    //         Logout()
    //         return false
    //     }
    // }

    async function Login(username, password) {  //using JWT authentication here

       
        try {
            const response = await executeJWTAuthenticationService(username, password)

            const JwtToken = 'Bearer ' + response.data.token

            if (response.status === 200) {
                
                setIsAuthenticated(true)
                setUsername(username)
                setToken(JwtToken)
                

                apiClient.interceptors.request.use(  //creating an interceptor so that every req has token
                    (config) => {
                        config.headers.Authorization = JwtToken  //setting token as authorization
                        return config
                    }
                )

                return true
            } else {
                Logout()
                return false
            }
        } catch (error) {
            Logout()
            return false
        }
    }

    function Logout() {
        setIsAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, Login, Logout, username, token }}>
            {children}
        </AuthContext.Provider>
    )
}
