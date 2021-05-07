import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SIGNUP = 'https://marvel-catalog-signin.herokuapp.com/api/signup';

function SignUp(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const validateForm = () => {
        return name.length > 0 &&
        email.length > 0 && 
        password.length > 0 &&
        passwordConfirmation.length > 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello! You pressed the create account button.")
        fetch(SIGNUP, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, email: email, password: password, password_confirmation: passwordConfirmation})
        })
            .then(res => res.json())
            .then(result => {
                props.status(result.success);
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });

    }

    return (
        <div className="SignUp">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="name">
                    <Form.Label>Name (First and Last)</Form.Label>
                    <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="passwordConfirmation">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="passwordConfirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>Create an Account</Button>
            </Form>
        </div>
    )
}

export default SignUp;