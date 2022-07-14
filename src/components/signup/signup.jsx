import React from 'react';
import './signup.css';
import { TextField, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { userSignup } from '../../service/user.service';
import { Link } from "react-router-dom";

const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileNoRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

function Signup(props) {

    const [showPassword, setShowPassword] = React.useState(false);
    const [signupObj, setSignupObj] = React.useState({fullName: '', email: '', password: '', mobileNo: ''});
    const [regexObj, setRegexObj] = React.useState({fullNameBorder: false, fullNameHelper: '', 
                                                    emailBorder: false, emailHelper: '',
                                                    passwordBorder: false, passwordHelper: '',
                                                    mobileNoBorder: false, mobileNoHelper: ''})

    const switchForm = () => {
        props.showSigninForm();
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const getFullName = (event) => {
        setSignupObj((prevState) => ({...prevState, fullName: event.target.value}))
    }

    const getEmail = (event) => {
        setSignupObj((prevState) => ({...prevState, email: event.target.value}))
    }

    const getPassword = (event) => {
        setSignupObj((prevState) => ({...prevState, password: event.target.value}))
    }

    const getMobileNo = (event) => {
        setSignupObj((prevState) => ({...prevState, mobileNo: event.target.value}))
    }

    const testUserDetails = () => {
        let fullNameTest = fullNameRegex.test(signupObj.fullName);
        let emailTest = emailRegex.test(signupObj.email);
        let passwordTest = passwordRegex.test(signupObj.password);
        let mobileNoTest = mobileNoRegex.test(signupObj.mobileNo);

        if(fullNameTest === false) {
            setRegexObj((prevState) => ({...prevState,fullNameBorder:true,fullNameHelper: 'Enter valid FullName'}));
        }else if(fullNameTest === true) {
            setRegexObj((prevState) => ({...prevState,fullNameBorder:false,fullNameHelper: ''}));
        }

        if(emailTest === false) {
            setRegexObj((prevState) => ({...prevState,emailBorder:true,emailHelper: 'Enter valid email'}));
        }else if(emailTest === true) {
            setRegexObj((prevState) => ({...prevState,emailBorder:false,emailHelper: ''}));
        }

        if(passwordTest === false) {
            setRegexObj((prevState) => ({...prevState,passwordBorder:true,passwordHelper: 'Enter valid password'}));
        }else if(passwordTest === true) {
            setRegexObj((prevState) => ({...prevState,passwordBorder:false,passwordHelper: ''}));
        }

        if(mobileNoTest === false) {
            setRegexObj((prevState) => ({...prevState,mobileNoBorder:true,mobileNoHelper: 'Enter valid mobile number'}));
        }else if(mobileNoTest === true) {
            setRegexObj((prevState) => ({...prevState,mobileNoBorder:false,mobileNoHelper: ''}));
        }

        if(fullNameTest === true && emailTest === true && passwordTest === true && mobileNoTest === true) {
            userSignup(signupObj).then((response) => {
                console.log(response);
                
            }).catch((error) => console.log(error));
        }
    }

    return (
        <div className='signup-form-container'>
            <div className='signup-header-container'>
                <div style={{color: 'gray'}} className='form-name-container' onClick={switchForm}>login</div>
                <div className='form-name-container' >signup</div>
            </div>
            <div className='signup-form-content'>
                <TextField sx={{width: '65%' }} label="Full Name" variant="outlined" size="small" className='form-content' 
                onChange={getFullName} error={regexObj.fullNameBorder} helperText={regexObj.fullNameHelper}/>
                <TextField sx={{width: '65%' }} label="Email id" variant="outlined" size="small" className='form-content'
                onChange={getEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper}/>
                <FormControl sx={{width: '65%', height: '8%'}} variant="outlined" size="small">
                    <InputLabel htmlFor="outlined-adornment-password" error={regexObj.passwordBorder}>Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={getPassword}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password" error={regexObj.passwordBorder}/>
                        <FormHelperText id="outlined-adornment-password" error={regexObj.passwordBorder}>{regexObj.passwordHelper}</FormHelperText>
                </FormControl>
                <TextField sx={{width: '65%' }} label="Mobile Number" variant="outlined" size="small" className='form-content' 
                onChange={getMobileNo} error={regexObj.mobileNoBorder} helperText={regexObj.mobileNoHelper}/>
                <Button variant='contained' style={{width: '65%', backgroundColor: "#A03037", opacity: 1}} size="small" onClick={testUserDetails}>signup</Button>
            </div>

        </div>
    );
}

export default Signup;