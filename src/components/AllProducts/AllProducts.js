import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllProducts(data)
            })
    }, [])

    return (
        <div className='all-products-div'>
            {
                allProducts.map(product => <Product key={product._id} product={product}> </Product>)
            }
        </div>
    );
};

export default AllProducts;