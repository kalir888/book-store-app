import React from 'react';
import './header.css';
import Book from '../../assets/education.png'
import { Typography, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

function Header() {
    return (
        <div className='header-container'>
            <div className='header-section-one'>
                <img src={Book} alt="book" />
                <Typography className='store-title-container'>Bookstore</Typography>
            </div>
            <Search style={{width: '40%', height: '60%', display: 'flex', alignItems: 'center' }}>
                <SearchIconWrapper>
                <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <div className='header-options-container'>
                <Divider orientation='vertical'/>
                <div className='header-option'>
                    <PermIdentityOutlinedIcon fontSize='small' style={{color: 'white'}}/>
                    <Typography fontSize='small' className='header-template'>Profile</Typography>
                </div>
                <Divider orientation='vertical'/>
                <div className='header-option'>
                    <ShoppingCartOutlinedIcon fontSize='small' style={{color: 'white'}}/>
                    <Typography fontSize='small' className='header-template'>Cart</Typography>
                </div>
                <Divider orientation='vertical'/>
            </div>
        </div>
    );
}

export default Header;