import { Button } from '@mui/material';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { imageURL, name, price } = props.product
    return (
        <div className='product-div'>
            <img src={imageURL} alt="" />
            <h4>{name}</h4>
            <p>Price: {price} BDT</p>

            <Button variant="contained" color="success">Buy Now</Button>
        </div>
    );
};

export default Product;