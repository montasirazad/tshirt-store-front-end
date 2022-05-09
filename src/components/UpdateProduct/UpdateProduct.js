import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateProduct.css';


const UpdateProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://shrouded-escarpment-14395.herokuapp.com/all-products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data)
            })
    }, [id])

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedItem = { name: updatedName, price: item.price, imageURL: item.imageURL };
        setItem(updatedItem)

    }

    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedItem = { name: item.name, price: updatedPrice, imageURL: item.imageURL };
        setItem(updatedItem)
    }

    const handleImageUrlChange = e => {
        const updatedImageUrl = e.target.value;
        const updatedItem = { name: item.name, price: item.price, imageURL: updatedImageUrl };
        setItem(updatedItem)
    }

    const handleSubmit = (e) => {
        const url = `https://shrouded-escarpment-14395.herokuapp.com/all-products/${id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Info successfully')
                    setItem({});
                }
            })


        //console.log(item);
        e.preventDefault()
    }
    return (
        <div className='update-form '>
            <div className='text-div'>
                <h6 className='text-danger'>Please, Enter Correct Info To Update Product.</h6>
                <p>Product id: {id}</p>
            </div>

            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Item Name</label>
                    <input onChange={handleNameChange} value={item.name || ''} type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input onChange={handlePriceChange} type="text" className="form-control" value={item.price || ''} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Photo URl</label>
                    <input onChange={handleImageUrlChange} type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UpdateProduct;