import { useState } from "react"
import { useNavigate} from "react-router-dom"

export default 
function Login() {

    const [username, setUsername] = useState("abdul")
    const [password, setPassword] = useState("")
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    function handleUserOnchange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordOnchange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username === 'abdul' && password === 'dummy') {
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="LoginForm">
            <h1>Login</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
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