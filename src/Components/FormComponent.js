import './FormComponent.css'
import { useState, useEffect } from 'react'
const FormComponent = () => {

    const initialValue = { username: '', email: '', password: '' }

    const [formValues, setFormValues] = useState(initialValue)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }
    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {};
        const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
        if (!values.username) {
            errors.username = "username is required!"
        }
        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a Valid Email ID !"
        }
        if (!values.password) {
            errors.password = "Password is required!"
        } else if ((values.password.length < 4)) {
            errors.password = "passward must be greter than 4 charectors !"
        } else if ((values.password.length > 10)) {
            errors.password = "passward cannot excced more than 10 charectors !"
        }
        return errors

    }
    return (
        <div className='container  my-5'>
            <pre>
                {JSON.stringify(formValues, undefined, 2)}
            </pre>
            <form className='w-50 mx-auto formElem p-5 ' onSubmit={handleSubmit}>
                <h1>Login Form</h1>

                <div className="mb-3 text-start ">
                    <label className="form-label">Username</label>

                    <input type="text"
                        className="form-control"
                        placeholder='username'
                        name='username'
                        value={formValues.username}
                        onChange={handleChange}
                    ></input>
                </div>
                <p className='text-danger text-start'>{formErrors.username}</p>

                <div className="mb-3 text-start">
                    <label className="form-label">Email</label>

                    <input type="email"
                        className="form-control"
                        placeholder='Email'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}></input>
                </div>
                <p className='text-danger text-start'>{formErrors.email}</p>
                <div className="mb-3 text-start">
                    <label className="form-label">Password</label>

                    <input type="password"

                        placeholder='password'
                        name='password'
                        className="form-control"
                        value={formValues.password}
                        onChange={handleChange}></input>
                </div>
                <p className='text-danger text-start'>{formErrors.password}</p>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default FormComponent