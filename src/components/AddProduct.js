import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
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
  };
  return (
    <div className="productAdd">
      <h1>Add Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && <span className="invalid">Enter Valid Name !!</span>}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && <span className="invalid">Enter Valid Price !!</span>}
      <input
        className="inputBox"
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
        className="inputBox"
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
      <button className="addBtn" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
