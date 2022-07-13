import { Button, Typography, TextField } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import './customerdetails.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { addCustomerInfo } from '../../service/data.service';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#A03037',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#A03037',
    },
  });

function BpRadio(props) {
    return (
      <Radio
        sx={{
          '&:hover': {
            bgcolor: 'transparent',
          },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
}

function CustomerDetails(props) {

    const [CDObj, setCDObj] = React.useState({name: '', phoneNumber: 0, fullAddress: '', city: '', state: '', addressType: ''})

    const showSectionThree = () => {
        props.showOrderSummary();
        addCustomerInfo(CDObj).then((response) => console.log(response)).catch((error) => console.log(error))
    }

    const getName = (event) => {
      setCDObj((prevState) => ({...prevState, name: event.target.value}));
    }

    const getMobileNo = (event) => {
      setCDObj((prevState) => ({...prevState, phoneNumber: event.target.value}));
    }

    const getAddress = (event) => {
      setCDObj((prevState) => ({...prevState, fullAddress: event.target.value}));
    }

    const getCity = (event) => {
      setCDObj((prevState) => ({...prevState, city: event.target.value}));
    }

    const getState = (event) => {
      setCDObj((prevState) => ({...prevState, state: event.target.value}));
    }

    const getType = (event) => {
      setCDObj((prevState) => ({...prevState, addressType: event.target.value}));
    }

    return (
        <div className='customerdetails-container'>
            <div className='secttwo-header-container'>
                <Typography sx={{fontSize: 'large', color: '#333232', fontWeight: 600}}>Customer Details</Typography>
                <Button size='small' sx={{border: '1px solid #A03037', height: '70%'}}>
                    <Typography sx={{textTransform: 'none', fontSize: 'small', color: '#A03037'}}>Add New Address</Typography>
                </Button>
            </div>
            <div className='cd-form-container'>
                <div className='cd-headform-container'>
                    <TextField label="Full Name" variant="outlined" size="medium" sx={{width: '48%'}} onChange={getName}/>
                    <TextField label="Mobile number" variant="outlined" size="medium" sx={{width: '48%'}} onChange={getMobileNo}/>
                </div>
                <div className='cd-address-form-container'>
                    <TextField multiline rows={3} label='Address' variant='outlined' sx={{width: '100%'}} onChange={getAddress}/>
                </div>
                <div className='cd-middleform-container'>
                    <TextField label="City/Town" variant="outlined" size="medium" sx={{width: '48%'}} onChange={getCity}/>
                    <TextField label="State" variant="outlined" size="medium" sx={{width: '48%'}} onChange={getState}/>
                </div>
                <FormControl className='cd-type-form-container'>
                    <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group" className='cd-radiobuttons-container' onChange={getType}>
                        <FormControlLabel value="Home" control={<BpRadio/>} label="Home" />
                        <FormControlLabel value="Work" control={<BpRadio/>} label="Work" />
                        <FormControlLabel value="Other" control={<BpRadio/>} label="Other" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className='cd-continuebutton-container'>
                {
                    props.sectThree 
                    ?
                    <div></div>
                    :
                    <Button variant='contained' size='small' sx={{width: '8vw'}} onClick={showSectionThree}>
                        <Typography sx={{color: '#FFFFFF'}}>Continue</Typography>
                    </Button>
                }
            </div>
            
        </div>
    );
}

export default CustomerDetails;