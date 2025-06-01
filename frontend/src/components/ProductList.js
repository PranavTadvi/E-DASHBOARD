import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setProducts(result);
  };
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };
  const searchhandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };
  return (
    <div className="container w-100 bg-light mt-5 p-5 d-flex flex-column align-items-center">
      <h1>Products</h1>
      <h2>Search</h2>
      <input
        className="form-control w-50 mb-5"
        type="text"
        placeholder="Search Product"
        onChange={searchhandle}
      />

<table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Company</th>
      <th scope="col">Category</th>
      <th scope="col">Opertions</th>
    </tr>
  </thead>
  <tbody>
  {products.length > 0 ? (
        products.map((item, index) => {
          return (
            <tr>
              <td scope="row">{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
              <td className="d-flex justify-content-around">
                <button className="btn btn-danger" onClick={() => deleteProduct(item._id)}>Delete</button>
                <Link className="btn btn-primary" to={"/update/" + item._id}>
                  Update
                </Link>
              </td>
            </tr>
          );
        })
      ) : (
        <h1>No Product found !!!</h1>
      )}
    
   
  </tbody>
</table>


     
    </div>
  );
};

export default ProductList;
