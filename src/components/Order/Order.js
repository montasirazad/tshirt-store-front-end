import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div>
            <h1>This is Order</h1>
            <Link to='/'>Buy another item</Link>
        </div>
    );
};

export default Order;