
 
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init'

 

const Register = () => {
 
   

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const naviGate = useNavigate();

    const naviGateLogin = event => {
        naviGate('/login')
    }

 
    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;

       createUserWithEmailAndPassword(email, password);
        
        naviGate('/home')



    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name='email' id='' placeholder='your email' required />
                <input type="password" name="password" placeholder='your password' required id="" />
                <input className='w-50 mx-auto btn btn-primary mt-2 ' type="submit" value="Register  " />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={naviGateLogin}>Login</Link> </p>

        </div>
    );
};

export default Register;