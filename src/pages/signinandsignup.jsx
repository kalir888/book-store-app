import React from 'react';
import './signinandsignup.css';
import bookstore from '../assets/bookstore.png'
import Signin from '../components/signin/signin';
import Signup from '../components/signup/signup';

function SigninAndSignup() {

    const [showLogin, setShowLogin] = React.useState(true);

    const showSignupForm = () => {
        setShowLogin(false);
    }

    const showSigninForm = () => {
        setShowLogin(true);
    }

    return (
        <div className='whole-page-container'>
            <div className='bookstore-image-container'>
                <img src={bookstore} className='bookstore-image-content'/>
                <span className='template-container'>online book shopping</span>
            </div>
            <div className='both-form-container'>
                {
                    showLogin ? <Signin showSignupForm={showSignupForm}/> : <Signup showSigninForm={showSigninForm}/>
                }
            </div>
        </div>
    );
}

export default SigninAndSignup;