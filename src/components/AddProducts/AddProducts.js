import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';


const AddProducts = () => {
    const { register, handleSubmit, watch, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/add-products', data)
            .then(function (res) {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset()
                }
            })
        //console.log(data)
    };

    console.log(watch("example"));
    return (
        <div className='add-products-div'>
            <h1>ADD PRODUCTS</h1>
            <form className='product-form' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder='Enter Product Name' required />
                <input type="text" {...register("price")} placeholder='Enter Product Price' required />
                <input type="text" {...register("imageURL")} placeholder='Enter Product image URL' required />
                <input type="submit" value={'Submit'} />
            </form>



        </div>
    );
};

export default AddProducts;