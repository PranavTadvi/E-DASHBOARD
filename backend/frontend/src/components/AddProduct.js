import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate =useNavigate()
  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if(result){
      navigate("/")
    }
  };
  return (
    <div className="container w-100 bg-light mt-5 p-5 d-flex flex-column align-items-center ">
      <h1 className="mb-4">Add Product</h1>
      <input
       className="form-control w-100 mb-3"
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && <span className="invalid">Enter Valid Name !!</span>}
      <input
       className="form-control w-100 mb-3"
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && <span className="invalid">Enter Valid Price !!</span>}
      <input
       className="form-control w-100 mb-3"
        type="text"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error && !category && (
        <span className="invalid">Enter Valid Category Name !!</span>
      )}
      <input
        className="form-control w-100 mb-3"
        type="text"
        placeholder="Enter Product Company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      {error && !company && (
        <span className="invalid">Enter Valid Company Name !!</span>
      )}
      <button className="btn btn-primary w-100" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
