import React, { useState } from "react";
import "./InfooAdd.css";
import axios from "axios";
import Swal from "sweetalert2";
const InfoAdd = () => {
  const [info, setInfo] = useState({});
  const handleFormAdd = (e) => {
    e.preventDefault();
    console.log(info);
    axios.post("https://peaceful-plains-87228.herokuapp.com/customerDetails",info).then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire("New Product successfully added");
          document.getElementById("createInfoForm").reset()
        }
      });
  };
  const infoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    // console.log(info);
    
  };
  return (
    <div className="mb-5">
      <h1 className="text-center">infoAdd</h1>
      <form id="createInfoForm" className="addForm" onSubmit={handleFormAdd}>
        <label htmlFor="">full_name </label>
        <input required onChange={infoChange} name="full_name" type="text" />
        <label htmlFor="">phone</label>
        <input required onChange={infoChange} name="phone" type="number" />
        <label htmlFor="">email</label>
        <input required onChange={infoChange} name="email" type="email" />
        <label htmlFor="">address</label>
        <input required onChange={infoChange} name="address" type="text" />
        <label htmlFor="">date_of_birth</label>
        <input
          onChange={infoChange}
          name="date_of_birth"
          type="datetime-local"
          required
        />
        <input id="submitBtn" className="mt-3" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default InfoAdd;
