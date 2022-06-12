import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom'
import auth from '../../../../firebase.init'
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    if (user) {
        navigate('/home')
    }

    if (error) {
        errorElement = <div>
            <p className='text-denger'>{error?.message}</p>
        </div>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password)

    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const naviGateRegister = event => {
        navigate('/register');

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent email');


    }


    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-center text-primary'>Please Login</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mx-auto m-4 w-50 d-block' variant="primary" type="submit">
                    <h5> Login</h5>
                </Button>
            </Form>
            {errorElement}
            <div className='sign-up'>
                <h5>New Account Register? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={naviGateRegister}>

                    Sign Up</Link> </h5>
                <h5> <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Forgotten password?</Link> </h5>
            </div>
            <SocialLogin></SocialLogin>


        </div>
    );
};


export default Login;