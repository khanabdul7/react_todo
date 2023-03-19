import { Formik, Field, Form, ErrorMessage } from "formik"  //formik is a library to handle forms in React
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { createTodoApi, retrieveSpecificTodoApi, updateSpecificTodoApi } from "./Api/TodoApi"
import { useAuthContext } from "./Security/AuthContext"

export default function TodoComponent() {

    const { id } = useParams()

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')

    const authContext = useAuthContext()

    const username = authContext.username

    const navigate = useNavigate()

    useEffect(
        () => retrieveTodo(), // eslint-disable-next-line
        [id])  // we want to call retrieveTodo whenever id updated

    function retrieveTodo() {
        if (id != -1) {  //if id isn't -1 then proceed with update logic, i.e fetch details of specific todo using id
            retrieveSpecificTodoApi(username, id)  // calling the retriveApiMethod
                .then((response) => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                })
                .catch((err) => console.log(err))

        }
    }
    function submit(values) {

        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }

        if (id == -1) {  // if id is -1 then proceed with createApi logic, else call updateApi method   
            createTodoApi(username, todo)
                .then(response => navigate('/todo'))
                .catch(err => console.log(err))
        }
        else {
            updateSpecificTodoApi(username, id, todo)
                .then(response => navigate('/todo'))
                .catch(err => console.log(err))
        }
    }

    function validation(values) {

        let errors = {

        }

        if (values.description.length < 5) {
            errors.description = "Enter atleast 5 characters in description"
        }

        if (values.targetDate == '') {
            errors.targetDate = "Enter a target date"
        }

        return errors
    }

    return (
        <div className="container">
            <h2>Welcome to Todo Component</h2>
            <div>
                <Formik
                    initialValues={{ description, targetDate }} enableReinitialize={true} onSubmit={submit}
                    validate={validation} validateOnBlur={false} validateOnChange={false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate" />
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-4" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}