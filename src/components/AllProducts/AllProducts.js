import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllProducts.css';



const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-products')
            .then(res => res.json())
            .then(data => {
                
                setAllProducts(data)
            })
    }, [])

    // const buyItem = (id) => {
    //      console.log(id);
    // }
    return (
        <div className='all-products-div'>
            {/* {
                allProducts.map(product => <Product key={product._id} product={product}> </Product>)
            } */}

            {

                allProducts.map(product =>
                    <div className='product-div' key={product._id}>
                        <img src={product.imageURL} alt="" />
                        <h6>{product.name}</h6>
                        <p>Price: {product.price} BDT</p>

                        <Link to={`/buy-item/${product._id}`}>
                        <Button variant="contained" color="success"><ShoppingCartIcon /> Buy Now</Button>
                        </Link>
                    </div>)
            }
        </div>
    );
};

export default AllProducts;