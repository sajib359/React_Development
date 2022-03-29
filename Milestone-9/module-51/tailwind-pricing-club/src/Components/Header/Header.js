import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-6xl mt-5 text-amber-600 font-bold text-center my-10">Welcome To My Pricing Club</h1>
        </div>
    );
};

export default Header;