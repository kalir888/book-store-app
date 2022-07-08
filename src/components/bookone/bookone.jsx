import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import './bookone.css';

function BookOne(props) {

    const bookClickHandler = () => {
        props.changeBookStatus(props.book);
    }
    
    return (
        <Card className='book-one' onClick={bookClickHandler}>
            <CardContent className='book-one-container'>
                <div className='bookone-image-container'>
                    <img src={props.book.bookImage} alt={props.book.bookTitle} className='bookeone-image' />
                </div>
                <div className='bookone-details'>
                    <Typography style={{fontSize: 'small', fontWeight: 'bold', color: "#0A0102"}} className='bookone-name'>{props.book.bookName}</Typography>
                    <Typography style={{fontSize: 'x-small'}} className='bookone-author'>by {props.book.author}</Typography>
                    <div className='bookone-rating-container'>
                        <div className='bookone-rating-box'>4.5
                            <span className="bookone-star">&#9733;</span>
                        </div>
                        <span className='bookone-count'>(20)</span>
                    </div>
                    <div className='bookone-prices-container'>
                        <div className='dashboard-discount-price-container'>Rs. {props.book.discountPrice}</div>
                        <div className='dashboard-price-container'>Rs. {props.book.price}</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default BookOne;