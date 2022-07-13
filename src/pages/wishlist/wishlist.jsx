import React from 'react';
import Header from '../../components/header/header';
import { deleteFromList, getWishlist } from '../../service/data.service';
import './wishlist.css';
import { Divider, Typography } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BookFive from '../../components/bookfive/bookfive';

function Wishlist(props) {

    const [books, setBooks] = React.useState([]);

    const deleteBook = (bookId) => {
        deleteFromList(bookId).then((response) => {
            console.log(response)
        }).catch((error) => console.log(error));
    }

    React.useEffect(() => {
        getWishlist().then((response) => {
            setBooks(response.data.data.books)
        })
    })

    return (
        <div className='wishlist-page-container'>
            <Header/>
            <div className='wishlist-title-container'>
                <Typography sx={{color: '#9D9D9D', textAlign: 'left'}}>Home /</Typography>
                <Typography sx={{color: '#0A0102', textAlign: 'left'}}>My wishlist</Typography>
            </div>
            <div className='wishlist-books-container'>
                <div className='wishlist-header-container'>
                    <Typography sx={{fontSize: 'x-large', fontWeight: 600, textAlign: 'left'}}>My Wishlist({books.length})</Typography>
                </div>
                <div className='wish-booklist-container'>
                    {
                        books.map(book =>  <div key={book.productId} className='wish-booksect-container'>
                                                <div className='wish-book-container'>
                                                    <BookFive book={book}/>
                                                    <DeleteTwoToneIcon onClick={() => deleteBook(book.productId)}/>
                                                </div>
                                                <Divider sx={{width: '100%'}}/>
                                           </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Wishlist;