import Login from './LoginComponent'
import './TodoApp.css'
import ErrorComponent from "./ErrorComponent"
import LogoutComponent from "./LogoutComponent"
import HeaderComponent from "./HeaderComponent"
import WelcomeComponent from "./WelcomeComponent"
import TodoComponent from './TodoListComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function TodoApp() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent />}></Route>
                    <Route path="/todo" element={<TodoComponent />}></Route>
                    <Route path="/logout" element={<LogoutComponent />}></Route>
                    <Route path="*" element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
