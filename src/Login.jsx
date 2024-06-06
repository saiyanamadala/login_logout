import { Field, Form, Formik } from "formik";
import { retrieveUser } from "./Api/Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [response,setResponse]=useState([])
    const [retrievedUsername,setRusername]=useState(null)
    const [retrievedPassword,setRPassword]=useState(null)
    const navigate=useNavigate();
    async function onLogin(values) {
        try {
            const reply = await retrieveUser(values.username);
            const response = reply.data;
            setResponse(response);
            setRusername(response.userName);
            setRPassword(response.password);
    
            if (values.username === response.userName && values.password === response.password) {
                console.log("login successful");
                navigate('/welcome')
            } else {
                console.log("Invalid username or password");
            }
        } catch (error) {
            console.error("Error retrieving user:", error);
        } finally {
            console.log('completed');
        }
    }

    return(
        <div className="container">
            <h3>Login</h3>
        <Formik initialValues={{
            username:'',
            password:''
        }}
        onSubmit={onLogin}
        >
            <Form>
                <fieldset className="mb-3">
                    <label className="form-label">Username</label>
                    <Field type="text" name="username" className="form-control"></Field>
                </fieldset>
                <fieldset className="mb-3">
                    <label className="form-label">Password</label>
                    <Field type="password" name="password" className="form-control"/>
                </fieldset>
                <button className="btn btn-secondary" type="submit">Login</button>
            </Form>
           
        </Formik>
        </div>
    )
}