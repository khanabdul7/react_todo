import { Link } from "react-router-dom"
import { useAuthContext } from "./Security/AuthContext"


export default function HeaderComponent() {

    const authContext = useAuthContext()
    const isAuthenticated = authContext.isAuthenticated

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" href="#">TodoApp</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                               { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/abdul">Home</Link></li> } 
                               { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/todo">Todos</Link></li> } 
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                           { !isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/">Login</Link></li> }
                           { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={ ()=> authContext.Logout() } >Logout</Link></li> }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}