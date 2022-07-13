import React from 'react';
import BookFour from '../bookfour/bookfour';
import { Button, Typography } from '@mui/material';
import './ordersummary.css';

function OrderSummary(props) {

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
                <Button size='small' variant='contained' sx={{width: '13%'}}>Checkout</Button>
            </div>
        </div>
    );
}

export default OrderSummary;