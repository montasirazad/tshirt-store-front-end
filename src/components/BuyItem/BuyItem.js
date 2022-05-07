import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BuyItem = () => {
    const [service, setService] = useState({});
    const { id } = useParams();


    // useEffect(() => {
    //     const url = `http://localhost:5000/all-products/${id}`
    //     console.log(url);
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             // setService(data)
    //         })

    // }, [id]);
    
    return (
        <div>
            <p>You choose product id {id} </p>
        </div>
    );
};

export default BuyItem;