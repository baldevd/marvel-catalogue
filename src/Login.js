import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SIGNIN = 'https://marvel-catalog-signin.herokuapp.com/api/signin';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello! You pressed the login button.");
        fetch(SIGNIN, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
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
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlid="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlid="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
            </Form>
        </div>
    )
}

export default Login;