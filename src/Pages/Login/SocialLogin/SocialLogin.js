import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'

const SocialLogin = () => {

    const naviGate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, GithubUser, GithubLoading, githubError] = useSignInWithGithub(auth);

    let errorElement;

    if (error || githubError) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {githubError?.message}</p>
        </div>

    }

    if (user || GithubUser) {
        naviGate('/home')

    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2' >or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto my-2  '>
                    <img width="30px" src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto my-3 mb-5  '>
                    <img width="30px" src={github} alt="" />
                    <span className='px-2 '> Github Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;