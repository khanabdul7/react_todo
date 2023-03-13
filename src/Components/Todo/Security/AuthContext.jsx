import { createContext, useState, useContext } from 'react'

// 1. creating AuthContext
export const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

// 2.  creating a provider method for our AuthContext,    or can use as value = {props.children} at line 11
// all the comps that are in <AuthContextProvider>  comps </AuthContextProvider> are received as children in below method.
export default function AuthContextProvider({children}){ 

    // 3. creating a state for use
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function Login (username, password){
        if (username === 'abdul' && password === 'dummy') {
            setIsAuthenticated(true)
            return true
        } else {
            setIsAuthenticated(false)
            return false
        }
    }

    function Logout (){
        setIsAuthenticated(false)
    }

    return(    
        <AuthContext.Provider value= {{ isAuthenticated, setIsAuthenticated, Login, Logout}}>    
           {children} 
        </AuthContext.Provider>
    )
}
