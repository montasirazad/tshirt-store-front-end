import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
               <Link to='/home'>HOME</Link>
               <Link to='/all-products'>All Product</Link>
               <Link to='/login'>Login</Link>
               <Link to='/admin'>Admin</Link>
            </nav>
        </div>
    );
};

export default Header;