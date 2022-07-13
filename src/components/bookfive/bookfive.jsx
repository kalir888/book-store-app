import React from 'react';
import './bookfive.css';
import { Typography } from '@mui/material';

function BookFive(props) {
    return (
        <div className='bookfive'>
            <div className='book-five-container'>
                <div className='bookfive-image-container'>
                    <img src={props.book.bookImage} alt={props.book.bookTitle} className='bookefive-image' />
                </div>
                <div className='bookfive-details'>
                    <Typography style={{fontSize: 'x-large', fontWeight: 500, color: "#0A0102"}} className='bookfive-name'>{props.book.bookName}</Typography>
                    <Typography style={{fontSize: 'small'}} className='bookfive-author'>by {props.book.author}</Typography>
                    <div className='bookfive-prices-container'>
                        <div className='bookfive-discount-price-container'>Rs. {props.book.discountPrice}</div>
                        <div className='bookfive-price-container'>Rs. {props.book.price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookFive;