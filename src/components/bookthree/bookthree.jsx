import { Typography } from '@mui/material';
import React from 'react';
import './bookthree.css';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { deleteFromCart, updateCart } from '../../service/data.service';

function BookThree(props) {

    const [quantity, setQuantity] = React.useState(props.book.quantity);

    const plusClickHandler = () => {
        setQuantity((prevState) => prevState + 1);
        updateCart(props.book.productId, {quantity: quantity})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.log(error));
    }

    const minusClickHandler = () => {
        if(quantity > 1) {
            setQuantity((prevState) => prevState - 1);
            updateCart(props.book.productId, {quantity: quantity})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error));
        }
    }

    const removeBook = () => {
        deleteFromCart(props.book.productId).then((response) => console.log(response)).catch((error) => console.log(error));
    }

    return (
        <div className='book-three'>
            <div className='book-three-container'>
                <div className='bookthree-image-container'>
                    <img src={props.book.bookImage} alt={props.book.bookTitle} className='bookethree-image' />
                </div>
                <div className='bookthree-details'>
                    <Typography style={{fontSize: 'x-large', fontWeight: 500, color: "#0A0102"}} className='bookthree-name'>{props.book.bookName}</Typography>
                    <Typography style={{fontSize: 'small'}} className='bookthree-author'>by {props.book.author}</Typography>
                    <div className='bookthree-prices-container'>
                        <div className='bookthree-discount-price-container'>Rs. {props.book.discountPrice}</div>
                        <div className='bookthree-price-container'>Rs. {props.book.price}</div>
                    </div>
                </div>
            </div>
            <div className='bookthree-quantity-option-container'>
                <div className='quantity'>
                    <AddCircleOutlineOutlinedIcon fontSize='large' sx={{cursor: 'pointer'}} onClick={plusClickHandler}/>
                    <div className='bookthree-quantbox-container'>{quantity}</div>
                    <RemoveCircleOutlineOutlinedIcon fontSize='large' sx={{cursor: 'pointer'}} onClick={minusClickHandler}/>
                </div>
                <button className='bookthree-remove-button-container' onClick={removeBook}>Remove</button>
            </div>
        </div>
    );
}

export default BookThree;