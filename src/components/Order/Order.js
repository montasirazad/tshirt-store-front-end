import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Order.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const { signedInUser } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/confirmed-order?email=${signedInUser.email}`)
            .then(function (res) {
                setOrders(res.data)
                
            })
    }, [])

    return (
        <div className='order-div'>
            <p>Order Summary</p>
            <p><small>Total items ordered: {orders.length}</small></p>
            <Link to='/'>< AddShoppingCartIcon />Buy another Item </Link>

            <table id="customers">
                <tbody>
                    <tr>

                        <th>Customer Name</th>
                        <th>Customer E-mail</th>
                        <th>Product image</th>
                        <th>Product Name</th>
                        <th>Order Time</th>
                        <th>Order ID</th>


                    </tr>


                    {
                        orders.map(order => <tr key={order._id}>

                            {<td>{order.customerName}</td>}
                            {<td>{order.email}</td>}
                            {<td>{<img src={order.productImage} alt="" />}</td>}
                            {<td>{order.productName}</td>}
                            {<td>{(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</td>}
                            {<td><small>{order._id}</small></td>}

                        </tr>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default Order;