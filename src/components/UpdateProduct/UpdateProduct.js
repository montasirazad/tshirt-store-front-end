import React from 'react';
import './UpdateProduct.css'
const UpdateProduct = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='update-form '>
            <h3>update product</h3>

            <form onClick={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Item Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Photo URl</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UpdateProduct;