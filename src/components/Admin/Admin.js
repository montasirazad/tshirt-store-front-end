import React, { useEffect, useState } from 'react';
import './Admin.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';



const Admin = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-escarpment-14395.herokuapp.com/all-products')
            .then(res => res.json())
            .then(data => {
                setProduct(data);

            })
    }, [])

    const handleDelete = (id) => {

        const confirm = window.confirm('Are You sure You want to delete ?');

        if (confirm) {
            fetch(`https://shrouded-escarpment-14395.herokuapp.com/all-products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const filteredProduct = product.filter(item => item._id !== id);
                        setProduct(filteredProduct);
                    }
                })
        }
    }

   
    return (
        <div >
            <div className="title-div">
                <h1>Total item Found :{product.length}</h1>
                <Link to='/add-products'><AddCircleIcon /> Add a new product</Link>
            </div>

            <table id="customers">
                <tbody>
                    <tr>

                        <th>Product Name</th>
                        <th>Product image</th>
                        <th>Product ID</th>
                        <th>Delete</th>
                        <th>Update </th>

                    </tr>


                    {
                        product.map(item => <tr key={item._id}>

                            {<td>{item.name}</td>}
                            {<td>{<img src={item.imageURL} alt="" />}</td>}
                            {<td><small>{item._id}</small></td>}

                            {<td  >{<DeleteIcon onClick={() => handleDelete(item._id)} />} </td>}
                            {<td><Link to={`/update-product/${item._id}`} >{< EditIcon />}</Link></td>}


                        </tr>)
                    }
                </tbody>


            </table>

        </div>
    );
};

export default Admin;