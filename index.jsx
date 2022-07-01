import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { Form, FormGroup, FormFeedback, Label, Input, Button } from "reactstrap";
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import loginImg from "../../img.webp"

const validation = yup.object().shape(
    {
        email: yup.string().email().required("Wrong Email"),
        password: yup.string().min(10).required("Wrong Password"),
        address: yup.string().required("Wrong Address"),
        join_date: yup.string().required("Wrong Info"),
        phone_number: yup.number().min(12).required("Wrong Phone Number!")
    }
)

const Register = () => {

    const isAuth = sessionStorage.getItem('access_token');
    const formik = useFormik({
        initialValues: {
            email: '    ',
            password: '',
            address: '',
            join_date: '',
            phone_number: ' '
        },
        validationSchema: validation,
        onSubmit: () => handleLogin()
    })

    const handleLogin = async () => {
        const form = formik.values
        await axios.post('http://localhost:7777/login', form)
            .then((res) => {
                sessionStorage.setItem('access_token', res.data.token)
            })
            .catch((err) => console.log(err))

        window.location.href = "/login"
    }

    if (isAuth) return <Navigate to="/login" />

    return (
        <div className="bg">
        <div className="base-container">
            <Form onSubmit={formik.handleSubmit}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="error" />
                </div>
                <div className="form">
                <FormGroup>
                    <div className="form-group">
                    <Label>Email</Label>
                    <Input
                        value={formik.values.email}
                        placeholder="Please enter your email"
                        onChange={formik.handleChange}
                        name="email"
                        id="email"
                        invalid={formik.touched.email && Boolean(formik.errors.email)}
                    />
                    {
                        formik.touched.email && Boolean(formik.errors.email) &&
                        <FormFeedback>
                            {formik.errors.email}
                        </FormFeedback>
                    }
                    </div>
                </FormGroup>

                <FormGroup>
                <div className="form-group">
                    <Label>Password</Label>
                    <Input
                        value={formik.values.password}
                        placeholder="Please enter your password"
                        onChange={formik.handleChange}
                        name="password"
                        id="password"
                        invalid={formik.touched.password && Boolean(formik.errors.password)}
                    />
                    {
                        formik.touched.password && Boolean(formik.errors.password) &&
                        <FormFeedback>
                            {formik.errors.password}
                        </FormFeedback>
                    }
                    </div>
                </FormGroup>

                <FormGroup>
                    <div className="form-group">
                    <Label>Address</Label>
                    <Input
                        value={formik.values.address}
                        placeholder="Please enter your address"
                        onChange={formik.handleChange}
                        name="address"
                        id="address"
                        invalid={formik.touched.address && Boolean(formik.errors.address)}
                    />
                    {
                        formik.touched.address && Boolean(formik.errors.address) &&
                        <FormFeedback>
                            {formik.errors.address}
                        </FormFeedback>
                    }
                    </div>
                </FormGroup>

                <FormGroup>
                <div className="form-group">
                    <Label>Join Date</Label>
                    <Input
                        value={formik.values.join_date}
                        placeholder="When did you join?"
                        onChange={formik.handleChange}
                        name="join_date"
                        id="join_date"
                        invalid={formik.touched.join_date && Boolean(formik.errors.join_date)}
                    />
                    {
                        formik.touched.join_date && Boolean(formik.errors.join_date) &&
                        <FormFeedback>
                            {formik.errors.join_date}
                        </FormFeedback>
                    }
                    </div>
                </FormGroup>

                <FormGroup>
                <div className="form-group">
                    <Label>Phone Number</Label>
                    <Input
                        value={formik.values.phone_number}
                        placeholder="Please enter your phone_number"
                        onChange={formik.handleChange}
                        name="phone_number"
                        id="phone_number"
                        invalid={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                    />
                    {
                        formik.touched.phone_number && Boolean(formik.errors.phone_number) &&
                        <FormFeedback>
                            {formik.errors.phone_number}
                        </FormFeedback>
                    }
                    </div>
                </FormGroup>
                </div>


                </div>
                <div className="footer">
                <Button type="submit"> Register </Button>
                </div>
            </Form>
            </div>

            <div className="h"></div>
            <div className="h2"></div>
            <div className="h3"></div>
        </div>
        
    )
}

export default Register