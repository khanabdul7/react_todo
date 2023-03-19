import Login from './LoginComponent'
import './TodoApp.css'
import ErrorComponent from "./ErrorComponent"
import LogoutComponent from "./LogoutComponent"
import HeaderComponent from "./HeaderComponent"
import WelcomeComponent from "./WelcomeComponent"
import TodoListComponent from './TodoListComponent'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AuthContextProvider, { useAuthContext } from './Security/AuthContext'
import TodoComponent from './TodoComponent'

export default function TodoApp() {

    function AuthenticatedRoute({children}) {     
        const authContext = useAuthContext()
        if (authContext.isAuthenticated)    // if authentication is true return the child component
            return children
        return <Navigate to={'/'} />    // else navigate to login page
    }

    return (
        <div>
            <AuthContextProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/welcome/:username" element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>}
                        />
                        <Route path="/todo" element={
                            <AuthenticatedRoute>
                                <TodoListComponent />
                            </AuthenticatedRoute>}
                        />
                        <Route path="/todo/:id" element={
                            <AuthenticatedRoute>
                                <TodoComponent />
                            </AuthenticatedRoute>}
                        />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </div>
    )
}
