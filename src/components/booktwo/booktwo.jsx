import { Button, Card, CardContent, Divider, TextareaAutosize, Typography } from '@mui/material';
import React from 'react';
import './booktwo.css';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

function BookTwo(props) {
    return (
        <div className='booktwo-page-container'>
            <div className='booktwo-section-one'>
                <Card className='booktwo-image-container'>
                    <img src={props.book.bookImage} alt={props.book.bookName} className='booktwo-image-content' />
                </Card>
                <div className='booktwo-options-container'>
                    <Button variant='contained' style={{width: '48%', backgroundColor: "#A03037", opacity: 1}} size="small">
                        <span className='booktwo-button-content'>Add to bag</span>
                    </Button>
                    <Button variant='contained' startIcon={<FavoriteOutlinedIcon/>} style={{width: '48%', backgroundColor: "#333333", opacity: 1}} size="small">
                        <span className='booktwo-button-content'>Wishlist</span>
                    </Button>
                </div>
            </div>
            <div className='booktwo-section-two'>
                <div className='booktwo-details'>
                    <Typography style={{fontSize: 'x-large', fontWeight: 500, color: "#0A0102"}} className='booktwo-name'>{props.book.bookName}</Typography>
                    <Typography style={{fontSize: 'large', fontWeight: 500}} className='booktwo-author'>by {props.book.author}</Typography>
                    <div className='booktwo-rating-container'>
                        <div className='booktwo-rating-box'>4.5<span className='booktwo-star'>&#9733;</span></div>
                        <span className='booktwo-count'>(20)</span>
                    </div>
                    <div className='booktwo-prices-container'>
                        <div className='booktwo-discount-price-container'>Rs. {props.book.discountPrice}</div>
                        <div className='booktwo-price-container'>Rs. {props.book.price}</div>
                    </div>
                    <Divider style={{width: '100%'}}/>
                </div>
                <div className='booktwo-description-container'>
                    <Typography className='booktwo-detail-container'>&#8226; Book Detail</Typography>
                    <Typography className='booktwo-preview-container' style={{fontSize: 'small'}}>{props.book.description}</Typography>
                    <Divider style={{width: '100%', marginTop: '30px'}}/>
                </div>
                <div className='comment-form-container'>
                    <Typography style={{fontWeight: 600}} className='comment-template-container'>Customer Feedback</Typography>
                    <div className='comment-bar-container'>
                        <Typography style={{fontSize: 'small', fontWeight: 800, opacity: 1}}><span className='overall-rating'>Overall rating</span></Typography>
                        <Rating style={{backgroundColor: 'white', opacity: 1}} name="hover-feedback" precision={0.5} emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}/>
                        <div className='comment-box'>
                            <TextareaAutosize placeHolder='Write your review' style={{width: '90%', height: '150%', marginTop: '20px', outline: 'none',
                                resize: 'none' }}/>
                            <div className='submit-button-container'>
                                <Button variant='contained' size='small'><span style={{textTransform: 'none'}}>Submit</span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookTwo;