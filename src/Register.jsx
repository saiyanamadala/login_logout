import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { callhelloApi, registerNewUser } from "./Api/Api";

export default function Register(){
    
    const [id,setId]=useState(0);
    

    function onSubmit(values){
        const register={
            userName: values.username,
            password: values.password,
            birthDate: values.birthdate,
            phoneNumber: values.phonenumber,
            gender: values.gender,
            email: values.email
        };
        
        registerNewUser(register)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
        .finally(console.log('done'))
    }

    

    return(
        <div className="container">
        <Formik initialValues={{
                    username:'', 
                    password:'', 
                    birthdate:'', 
                    id:'', 
                    phonenumber: '', 
                    gender: '', 
                    email:'' 
                }}
                onSubmit={onSubmit}

                >
            <Form>
                <fieldset className="form-group">
                    <label>Username</label>
                    <Field type="text" className="form-control" name="username"></Field>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password</label>
                    <Field type="password" className="form-control" name="password"></Field>
                </fieldset>
                <fieldset className="form-group">
                    <label>BirthDate</label>
                    <Field type="date" className="form-control" name="birthdate"></Field>
                </fieldset>
                <fieldset className="form-group">
                    <label>Phone Number</label>
                    <Field type="tel" className="form-control" name="phonenumber"></Field>
                </fieldset>
                <fieldset className="form-group">
                    <label>Gender</label>
                    <Field as="select" className="form-control" name="gender">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                    </Field>
                </fieldset>
                <fieldset className="form-group">
                    <label>Email</label>
                    <Field type="email" className="form-control" name="email"></Field>
                </fieldset>
                <div>
                    <button className="btn btn-success m-3" type="submit">Register</button>
                </div>
            </Form>
        </Formik>
        </div>
    )
}