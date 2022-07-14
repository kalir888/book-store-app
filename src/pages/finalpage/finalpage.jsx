import React from 'react';
import Header from '../../components/header/header';
import './finalpage.css';
import StarOne from '../../assets/upstar.PNG';
import StarTwo from '../../assets/downstar.PNG';
import { Button, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FinalPage() {
    const navigate = useNavigate();
    return (
        <div className='finalpage-container'>
            <Header/>
            <div className='order-success-message-container'>
                <div className='stars-container'>
                    <img src={StarOne} alt="stars" className='starone-container'/>
                    <Typography sx={{color: '#333232', font: 'normal normal bold 25px/30px Lato'}}>Order Placed Sucessfully</Typography>
                    <img src={StarTwo} alt="stars" className='startwo-container'/>
                </div>
                <Typography sx={{color: '#333232', font: 'normal normal normal 18px/22px Lato'}} className='final-message-container'>
                    hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
                </Typography>
            </div>
            <div className='contact-information-container'>
                <div className='contact-table-container'>
                    <div className='table-header-container'>
                        <div className='email-header-container'>
                            <Typography sx={{font: 'normal normal medium 12px/15px Lato', color: '#333232'}}>Email us</Typography>
                        </div>
                        <div className='mobileno-header-container'>
                            <Typography sx={{font: 'normal normal medium 12px/15px Lato', color: '#333232'}}>Contact us</Typography>
                        </div>
                        <div className='address-header-container'>
                            <Typography sx={{font: 'normal normal medium 12px/15px Lato', color: '#333232'}}>Address</Typography>
                        </div>
                    </div>
                    <Divider sx={{width: '100%'}}/>
                    <div className='table-content-container'>
                        <div className='email-content-container'>
                            <Typography sx={{font: 'normal normal medium 12px/15px Lato', color: '#333232'}}>admin@bookstore.com</Typography>
                        </div>
                        <Divider orientation='vertical'/>
                        <div className='mobileno-content-container'>
                            <Typography sx={{font: 'normal normal medium 12px/15px Lato', color: '#333232'}}>+91 8163475881</Typography>
                        </div>
                        <Divider orientation='vertical'/>
                        <div className='address-content-container'>
                            <Typography sx={{font: 'normal normal medium 12px/15px Lato', color: '#333232'}} className='address-content'>
                                42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className='continue-shopping-container'>
                    <Button variant='contained' onClick={() => navigate('/Dashboard')}>
                        <Typography sx={{color: '#FFFFFF', font: 'normal normal medium 14px/17px Lato'}}>Continue Shopping</Typography>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FinalPage;