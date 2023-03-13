import { useState } from "react"
import { useNavigate} from "react-router-dom"
import { useAuthContext } from "./Security/AuthContext"

export default 
function Login() {

    const [username, setUsername] = useState("abdul")
    const [password, setPassword] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()
    const authContext = useAuthContext()

    function handleUserOnchange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordOnchange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (authContext.Login(username, password )) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="LoginForm">
            <h1>Login</h1>
            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            <div>
                <label>Username </label>
                <input type="text" className="username" value={username} onChange={handleUserOnchange} />
            </div>
            <div>
                <label>Password </label>
                <input type="password" className="password" value={password} onChange={handlePasswordOnchange} />
            </div>
            <div>
                <button className="LoginBtn" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}