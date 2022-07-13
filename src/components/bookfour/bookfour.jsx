import React from 'react';
import './bookfour.css';
import { Typography } from '@mui/material';

function BookFour(props) {
    return (
        <div className='bookfour'>
            <div className='book-four-container'>
                <div className='bookfour-image-container'>
                    <img src={props.book.bookImage} alt={props.book.bookTitle} className='bookefour-image' />
                </div>
                <div className='bookfour-details'>
                    <Typography style={{fontSize: 'x-large', fontWeight: 500, color: "#0A0102"}} className='bookfour-name'>{props.book.bookName}</Typography>
                    <Typography style={{fontSize: 'small'}} className='bookfour-author'>by {props.book.author}</Typography>
                    <div className='bookfour-prices-container'>
                        <div className='bookfour-discount-price-container'>Rs. {props.book.discountPrice}</div>
                        <div className='bookfour-price-container'>Rs. {props.book.price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookFour;