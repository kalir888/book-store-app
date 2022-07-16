import React from 'react';
import Header from '../../components/header/header'
import BookOne from '../../components/bookone/bookone';
import { getAllBooks, getCart } from '../../service/data.service';
import { Grid, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './dashboard.css';
import BookTwo from '../../components/booktwo/booktwo';
import Pagination from '@mui/material/Pagination';

function Dashboard() {

    const [allBooks, setAllBooks] = React.useState([]);

    const [showBookTwo, setShowBookTwo] = React.useState(false);

    const [bookToShow, setBookToShow] = React.useState({});

    const [userCart, setUserCart] = React.useState([]);

    const [page, setPage] = React.useState(1);

    const [pageBooks, setPageBooks] = React.useState([]);

    const showSearchingBooks = (string) => {
        let neededBooks = allBooks.filter((book) => book.bookName.toLowerCase().includes(string.toLowerCase()));
        console.log(neededBooks);
        setPageBooks(neededBooks);
        if(string.trim().length === 0) {
            getFirstPage(allBooks);
        }
    }

    const getFirstPage = (books) => {
        setAllBooks(books);
        let neededBooks = books.filter((book, index) => (index < 8 && index >= 0));
        console.log(neededBooks);
        setPageBooks(neededBooks);
    }

    const changeBookStatus = (book) => {
        setShowBookTwo(true);
        setBookToShow(book);
    }

    const nextPage = (e, value) => {
        if(value === undefined) {
            value = 1;
        }
        console.log(value);
        setPage(value);
        if(value > 3) {
            value = value % 3;
            (value === 0) ? value = value + 3 : value = value; 
        }
        const noOfBooks = 8;
        let miniIndex = (value * noOfBooks) - noOfBooks;
        let maxIndex = (value * noOfBooks) - 1;
        let books = allBooks.filter((book, index) => (index <= maxIndex && index >= miniIndex));
        setPageBooks(books);
    }

    React.useEffect(() => {
        getAllBooks().then((response) => {
            console.log(response)
            getFirstPage(response.data.data);
        }).catch((error) => console.log(error));
        getCart().then((response) => {
            console.log(response);
            setUserCart(response.data.data.books)
        })
    }, [])

    return (
        <div className='dashboard-container'>
            <Header showSearchingBooks={showSearchingBooks}/>
            {
                showBookTwo 
                ?
                <BookTwo book={bookToShow} cart={userCart}/> 
                :
                <>
                    <div className='dashboard-title-options-container'>
                        <div className='dash-bookcount-container'>
                            <Typography className='dashboard-title' style={{fontWeight: 'bold'}}>Books</Typography>
                            <Typography style={{fontSize: 'x-small'}} className='dash-count-content'>({allBooks.length} items)</Typography>
                        </div>
                        <FormControl sx={{ m: 1, width: '25%'}} size="small">
                            <InputLabel id="demo-select-small">filter</InputLabel>
                            <Select labelId="demo-select-small" id="demo-select-small" label="filter">
                                <MenuItem value="none">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value="relevance">Sort by relevance</MenuItem>
                                <MenuItem value="title">Sort by title</MenuItem>
                                <MenuItem value="date">Sort by creation date</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Grid  container style={{width: '70vw', display: 'flex'}} className='all-books-container' spacing={8} columns={{ xs: 8, sm: 12, md: 12}}>
                        {pageBooks.map(book => <Grid key={book._id} item lg={9}>
                            <BookOne key={book._id} book={book} changeBookStatus={changeBookStatus}/>
                            </Grid>)}
                    </Grid>
                    <Pagination page={page} defaultPage={1} onChange={nextPage} count={10} />
                </>
            }
            
        </div>
    );
}

export default Dashboard;