import { Button, Card, Divider, TextareaAutosize, Typography, Stack } from '@mui/material';
import React from 'react';
import './booktwo.css';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { addComment, addToCart, addToWishlist, getAllComments, getCart, updateCart } from '../../service/data.service';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useNavigate } from 'react-router-dom';

function BookTwo(props) {

    const navigate = useNavigate();

    const [allComments, setAllComments] = React.useState([]);

    const [commentObj, setCommentObj] = React.useState({stars: 0, comment: ''});

    const [submitClick, setSubmitClick] = React.useState(0);

    const [showQuantButton, setShowQuantButton] = React.useState(false);

    const [quantity, setQuantity] = React.useState(0);
    
    const plusClickHandler = () => {
        setQuantity((prevState) => prevState + 1);
        updateCart(props.book._id, {quantity: quantity})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.log(error));
    }

    const minusClickHandler = () => {
        if(quantity > 1) {
            setQuantity((prevState) => prevState - 1);
            updateCart(props.book._id, {quantity: quantity+1})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error));
        }
    }

    const checkBook = async (cart) => {
        let bookIndex = await cart.findIndex(book => book.productId === props.book._id);
        if(bookIndex !== -1) {
            setShowQuantButton(true);
            setQuantity(cart[bookIndex].quantity);
        }else if(bookIndex === -1){
            setShowQuantButton(false);
        }
    }

    const getComment = (event) => {
        setCommentObj((prevState) => ({...prevState, comment: event.target.value}));
    }

    const getStars = (event, newValue) => {
        setCommentObj((prevState) => ({...prevState, stars: newValue}));
    }

    const postComment = () => {
        addComment(props.book._id, commentObj).then((response) => {
            console.log(response)
            setSubmitClick((prevState) => prevState + 1);
        }).catch((error) => console.log(error));
    }

    const addBookToCart = () => {
        addToCart(props.book._id).then((response) => {
            console.log(response);
            setShowQuantButton(true);
            setQuantity(1);
        }).catch((error) => console.log(error));
    }

    const addToList = () => {
        addToWishlist(props.book._id).then((response) => {
            console.log(response);
            navigate('/Dashboard/Wishlist');
        }).catch((error) => console.log(error));
    }

    React.useEffect(() => {
        checkBook(props.cart);
    },[])

    React.useEffect(() => {
        getAllComments(props.book._id).then((response) => {
            setAllComments(response.data.data);
        }).catch((error) => console.log(error));
    }, [submitClick])

    return (
        <div className='bookTwo'>
            <div className='booktwo-title-container'>
                <Typography sx={{color: '#9D9D9D', textAlign: 'left'}}>Home /</Typography>
                <Typography sx={{color: '#0A0102', textAlign: 'left'}}>Book(01)</Typography>
            </div>
            <div className='booktwo-page-container '>
                <div className='booktwo-section-one'>
                    <Card className='booktwo-image-container'>
                        <img src={props.book.bookImage} alt={props.book.bookName} className='booktwo-image-content' />
                    </Card>
                    <div className='booktwo-options-container'>
                        {
                            showQuantButton
                            ?
                            <div className='booktwo-quantity'>
                                <AddCircleOutlineOutlinedIcon fontSize='large' sx={{cursor: 'pointer'}} onClick={plusClickHandler}/>
                                <div className='booktwo-quantbox-container'>{quantity}</div>
                                <RemoveCircleOutlineOutlinedIcon fontSize='large' sx={{cursor: 'pointer'}} onClick={minusClickHandler}/>
                            </div>
                            :
                            <Button variant='contained' style={{width: '48%', backgroundColor: "#A03037", opacity: 1}} 
                            size="small" onClick={addBookToCart}>
                                <span className='booktwo-button-content'>Add to bag</span>
                            </Button>
                        }
                        <Button variant='contained' startIcon={<FavoriteOutlinedIcon/>} style={{width: '48%', backgroundColor: "#333333", opacity: 1}} 
                        size="small" onClick={addToList}>
                            <span className='booktwo-button-content'>Wishlist</span>
                        </Button>
                    </div>
                </div>
                <div className='booktwo-section-two'>
                    <div className='booktwo-details'>
                        <Typography style={{fontSize: 'x-large', fontWeight: 500, color: "#0A0102"}} className='booktwo-name'>{props.book.bookName}</Typography>
                        <Typography style={{fontSize: 'large', fontWeight: 500}} className='booktwo-author'>by {props.book.author}</Typography>
                        <div className='booktwo-rating-container'>
                            <div className='booktwo-rating-box'>{props.book.rating}<span className='booktwo-star'>&#9733;</span></div>
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
                            <Rating style={{backgroundColor: 'white', opacity: 1}} name="hover-feedback" precision={0.5} 
                            emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit"/>} onChange={getStars}/>
                            <div className='comment-box'>
                                <TextareaAutosize placeHolder='Write your review' style={{width: '90%', height: '50%', marginTop: '20px', outline: 'none',
                                    resize: 'none', borderColor: 'lightgray', borderRadius: '5px 5px 5px 5px'}} onChange={getComment}/>
                                <div className='submit-button-container'>
                                    <Button variant='contained' size='small' onClick={postComment}><span style={{textTransform: 'none'}}>Submit</span></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Stack style={{width: '100%', height: '80%', border: '1px solid lightgray', display: 'flex', 
                    flexDierection: 'column', alignItems: 'center'}}  spacing={2}>
                        {allComments.map(comment => <div key={comment._id} className='user-comment-box-container'>
                            <Typography sx={{fontWeight: 'bold', textAlign: 'left'}}>{comment.userName}</Typography>
                            <Rating sx={{display: 'flex'}} size='small' name="read-only" value={comment.stars} readOnly />
                            <Typography sx={{textAlign: 'left'}}>{comment.comment}</Typography>
                            </div>)}
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default BookTwo;