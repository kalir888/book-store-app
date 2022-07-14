import React from 'react';
import BookFour from '../bookfour/bookfour';
import { Button, Typography } from '@mui/material';
import './ordersummary.css';
import { useNavigate } from 'react-router-dom'
import { placeOrder } from '../../service/data.service';

function OrderSummary(props) {

    const navigate = useNavigate();

    const placeTheOrder = () => {
        placeOrder().then((response) => {
            console.log(response);
            navigate('/Dashboard/MyCart/FinalPage');
        }).catch((error) => console.log(error));
    }

    return (
        <div className='ordersummary-container'>
            <div className='order-header'>
                <Typography sx={{fontWeight: 500, fontSize: 'x-large', fontFamily: 'sans-serif', 
                textAlign: 'left'}}>Order summary</Typography>
            </div>
            <div className='order-booklist'>
            {
                props.books.map(book => <BookFour book={book} style={{border: '1px solid red'}}/>)
            }
            </div>
            <div className='order-place-order-button'>
                <Button size='small' variant='contained' className='checkout-button' onClick={placeTheOrder}>
                    Checkout
                </Button>
            </div>
        </div>
    );
}

export default OrderSummary;