import { useState, useEffect } from "react"
import { todoListWithUsernameApi, deleteTodoApi } from "./Api/TodoApi"
import { useAuthContext } from "./Security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function TodoListComponent() {

    // const today = new Date()
    // const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    const authContext = useAuthContext()

    const username = authContext.username

    const navigate = useNavigate()

    // const todos = [
    //     { id: 1, description: 'Learn FullStack', isDone: false, targetDate: targetDate },
    //     { id: 2, description: 'Learn javascript', isDone: false, targetDate: targetDate },
    //     { id: 3, description: 'Learn Java', isDone: false, targetDate: targetDate }
    // ]

    useEffect(() => getAllTodos, // eslint-disable-next-line
    [])

    function getAllTodos() {
        todoListWithUsernameApi(username)
            .then((response) => {
                console.log(response)
                setTodos(response.data)
            })
            .catch((err) => console.log(err))
    }

    function deleteTodo(id) {
        deleteTodoApi(username, id)
            .then(
                () => {
                    setMessage(`Delete of todo with id = ${id} successful`)
                    getAllTodos()
                }
            )
            .catch((err) => console.log(err))
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    function addTodo() {
        navigate(`/todo/-1`)
    }

    return (
        <div className="container">
            <span><h1> Things you want To Do</h1> <button className="btn btn-success" onClick={addTodo}>Create new Todo</button></span>
            {message && <div className="alert alert-success">{message}</div>}
            <div>
                <table className="table m-4" >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Completed</th>
                            <th>Target Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-warning" onClick={() => updateTodo(todo.id)} >Update</button></td>
                                <td><button className="btn btn-success" onClick={() => deleteTodo(todo.id)} >Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
