import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './BuyItem.css';
import Button from '@mui/material/Button';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';

const BuyItem = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const { signedInUser } = useAuth()


    useEffect(() => {
        const url = `https://shrouded-escarpment-14395.herokuapp.com/all-products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setItem(data)
            })

    }, [id]);

    const handleConfirmOrder = (item) => {

        const customerDetails = {
            customerName: signedInUser.displayName,
            email: signedInUser.email
        }

        const orderedItem = {
            productName: item.name,
            productPrice: item.price,
            productImage: item.imageURL,
            orderTime: new Date()
        }
        const confirmedOrder = { ...customerDetails, ...orderedItem }
        axios.post('https://shrouded-escarpment-14395.herokuapp.com/add-order', confirmedOrder)
            .then(function (res) {
               
            })
        //console.log(confirmedOrder);
    }
    return (
        <div className='item-div' key={item._id}>
            <img src={item.imageURL} alt="" />
            <h5>Name: {item.name}</h5>
            <p>Price: {item.price}</p>
            <p><small>Product id {id} </small></p>
            <Link to='/order'>
                <Button variant="outlined" color="error"
                    onClick={() => handleConfirmOrder(item)}>Confirm Order</Button>
            </Link>
        </div>
    );
};

export default BuyItem;