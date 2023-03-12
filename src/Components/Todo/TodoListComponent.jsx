
export default function TodoComponent() {

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
