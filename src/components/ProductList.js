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
    <div className="productList">
      <h1>Products</h1>
      <h2>Search</h2>
      <input
        className="searchInput"
        type="text"
        placeholder="Search Product"
        onChange={searchhandle}
      />
      <ul>
        <li>Sr.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Opertions</li>
      </ul>

      {products.length > 0 ? (
        products.map((item, index) => {
          return (
            <ul key={item._id}>
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.category}</li>
              <li>{item.company}</li>
              <li>
                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                <Link className="updateBtn" to={"/update/" + item._id}>
                  Update
                </Link>
              </li>
            </ul>
          );
        })
      ) : (
        <h1>No Product found !!!</h1>
      )}
    </div>
  );
};

export default ProductList;
