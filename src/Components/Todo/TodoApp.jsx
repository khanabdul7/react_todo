import { useState } from "react"
import './TodoApp.css'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from "react-router-dom"

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
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}

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

function WelcomeComponent() {
    const { username } = useParams()

    return (
        <div className="Welcome">
            <h1> Welcome {username} </h1>
            <div>
                Manage your Todo: <Link to="/todo" > My Todo </Link>
            </div>
        </div>
    )
}

function TodoComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const todos = [
        { id: 1, description: 'Learn FullStack', isDone: false, targetDate: targetDate },
        { id: 2, description: 'Learn javascript', isDone: false, targetDate: targetDate },
        { id: 3, description: 'Learn Java', isDone: false, targetDate: targetDate }
    ]
    return (
        <div className="container">
            <h1> Things you want To Do</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Completed</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.isDone.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="#">TodoApp</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/abdul">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todo">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

function FooterComponent() {
    return (
        <footer className="FooterComponent">
            <div>
                <hr /> Footer
            </div>
        </footer>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1> Logged out Successfully !</h1>
            <div>
                Thanks for using our app, come back soon.
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrComponent">
            <h1> We are working really hard !</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}