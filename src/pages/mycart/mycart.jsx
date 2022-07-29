import { Button, Typography } from '@mui/material';
import React from 'react';
import Header from '../../components/header/header';
import { getCart } from '../../service/data.service';
import './mycart.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookThree from '../../components/bookthree/bookthree';
import CustomerDetails from '../../components/customerdetails/customerdetails';
import OrderSummary from '../../components/ordersummary/ordersummary';
import { useDispatch, useSelector } from 'react-redux';
import { getBookList } from '../../components/redux/actions/cart';

function MyCart(props) {

    const [sectTwo, setSectTwo] = React.useState(false);

    const [sectThree, setSectThree] = React.useState(false);

    const dispatch = useDispatch();

    const showCustomerDetails = () => {
        setSectTwo(true);
    }

    const showOrderSummary = () => {
        setSectThree(true);
    }

    const getCartBooks = () => {
        getCart().then((response) => { 
            dispatch(getBookList(response.data.data.books))
            }).catch((error) => console.log(error));
    }

    let books = useSelector((state) => state.getBookList.books);


 
    /* React.useEffect(() => {
        getCartBooks();
    },[]) */

    getCartBooks();

    return (
        <div className='mycart-page-container'>
            <Header/>
            <div className='mycart-title-container'>
                <Typography sx={{color: '#9D9D9D', textAlign: 'left'}}>Home /</Typography>
                <Typography sx={{color: '#0A0102', textAlign: 'left'}}>My cart</Typography>
            </div>
            <div className='mycart-form-container'>
                <div className='mycart-section-one'>
                    <div className='mycart-sect-one-header'>
                        <Typography sx={{fontWeight: 500, fontSize: 'x-large', fontFamily: 'sans-serif', 
                        textAlign: 'left'}}>My cart({books.length})</Typography>
                        <FormControl sx={{ m: 1, width: '25%'}} size="small">
                            <InputLabel id="demo-select-small">select</InputLabel>
                            <Select labelId="demo-select-small" id="demo-select-small" label="filter">
                                <MenuItem value="none"><em>None</em></MenuItem>
                                <MenuItem value="relevance">
                                    <LocationOnIcon sx={{color: '#A03037'}}/>
                                    Use current location
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='mycart-booklist'>
                    {
                        books.map(book => <BookThree getCartBooks={getCartBooks} book={book} key={book.productId}/>)
                    }
                    </div>
                    <div className='mycart-place-order-button'>
                        {
                            sectTwo ? <div></div> : <Button size='small' variant='contained' onClick={showCustomerDetails}>Place order</Button>

                        }
                    </div>
                </div>
                {
                    sectTwo
                    ?
                    <CustomerDetails sectThree={sectThree} showOrderSummary={showOrderSummary}/>
                    :
                    <div className='mycart-section-two'>
                        <Typography sx={{fontSize: 'x-large', width: '90%', textAlign: 'left'}}>Address Details</Typography>
                    </div>
                }
                {
                    sectThree
                    ?
                    <OrderSummary books={books}/> 
                    :
                    <div className='mycart-section-three'>
                        <Typography sx={{fontSize: 'x-large', width: '90%', textAlign: 'left'}}>Order summary</Typography>
                    </div>
                }
            </div>
        </div>
    );
}

export default MyCart;