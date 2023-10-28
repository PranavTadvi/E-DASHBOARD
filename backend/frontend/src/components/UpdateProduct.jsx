import React from 'react'
import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
 const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  //   const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();



useEffect(() => {

const getProductDetails = async () => {
// console.log(params);
try {
  let result = await fetch(`http://localhost:5000/product/${params.id}`);
  result = await result.json();
  setName(result.name);
  setPrice(result.price);
  setCategory(result.category);
  setCompany(result.company);
} catch (error) {
  console.log(error);
}


}
getProductDetails();
})



const updateMyProduct = async () => {
// console.log(name, price, category, company);

    try{
      let result = await fetch(`http://localhost:5000/product/${params.id}`, {
        method: "put",
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      if(result){
        navigate("/");
      }
    }catch(err){
      console.log(err);
    }
}




return (
<>
  <div className="container w-100 bg-light mt-5 p-5 d-flex flex-column      align-items-center ">
         <h1 className="mb-4">Update Product</h1>
        <input
            className="form-control w-100 mb-3"
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="form-control w-100 mb-3"
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
            className="form-control w-100 mb-3"
          type="text"
          placeholder="Enter Product Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />

        <input
          className="form-control w-100 mb-3"
          type="text"
          placeholder="Enter Product Company"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />

        <button className="btn btn-primary w-100" onClick={updateMyProduct}>
          Update Product
        </button>
    </div>
</>
);   
}

export default UpdateProduct;

