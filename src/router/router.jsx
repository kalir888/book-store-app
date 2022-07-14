import React from 'react';
import { Route, BrowserRouter, Switch, Routes } from "react-router-dom";
import SigninAndSignup from '../pages/signinandsignup/signinandsignup';
import Dashboard from '../pages/dashboard/dashboard';
import MyCart from '../pages/mycart/mycart';
import Wishlist from '../pages/wishlist/wishlist';
import FinalPage from '../pages/finalpage/finalpage';

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SigninAndSignup/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/> 
                    <Route path="/Dashboard/MyCart" element={<MyCart/>}/>
                    <Route path="/Dashboard/Wishlist" element={<Wishlist/>}/>
                    <Route path="/Dashboard/MyCart/FinalPage" element={<FinalPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;