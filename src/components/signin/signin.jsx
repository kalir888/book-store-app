import React from 'react';
import './signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin(props) {

    const [showPassword, setShowPassword] = React.useState(false);

    const [signinObj, setSigninObj] = React.useState({email: '', password: ''});
    const [regexObj, setRegexObj] = React.useState({emailBorder: false, emailHelper: '',passwordBorder: false, passwordHelper: ''})

    const switchForm = () => {
        props.showSignupForm();
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const getEmail = (event) => {
        setSigninObj((prevState) => ({...prevState,email: event.target.value}));
    } 

    const getPassword = (event) => {
        setSigninObj((prevState) => ({...prevState,password: event.target.value}));
    }

    const testUserDetails = () => {
        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);
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
    }

    return (
        <div className='signin-form-container'>
            <div className='signin-header-container'>
                <div className='form-name-container'>login</div>
                <div style={{color: 'gray'}} className='form-name-container' onClick={switchForm}>signup</div>
            </div>
            <div className='signin-form-content'>
                <TextField label="Email id" variant="outlined" size="small" className='form-content'
                error={regexObj.emailBorder} helperText={regexObj.emailHelper} onChange={getEmail}/>
                <FormControl sx={{ m: 1, width: '65%' }} variant="outlined" size="small">
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
                <Button variant='contained' style={{width: 220, backgroundColor: "#A03037", opacity: 1}} size="small" onClick={testUserDetails}>login</Button>
                <Divider style={{width:'70%'}} ><span className='or-content'>OR</span></Divider>
                <div className='signin-options-container'>
                    <Button variant='contained' style={{ width: '40%', backgroundColor: "#4266B2", opacity: 1}} size="small"><span className='facebook-letter'>Facebook</span></Button>
                    <Button variant='contained' style={{ width: '40%', backgroundColor: "#F5F5F5", opacity: 1}} size="small"><span className='google-letter'>Google</span></Button>
                </div>
            </div>

        </div>
    );
}

export default Signin;