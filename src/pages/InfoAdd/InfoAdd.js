import React, { useState } from "react";
import "./InfooAdd.css"

const InfoAdd = () => {
  const [info, setInfo] = useState({});
  const handleFormAdd = (e) => {
    e.preventDefault();
    console.log(info);
  };
  const infoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };
  return (
    <div>
      <h1 className="text-center">infoAdd</h1>
      <form className="addForm" onSubmit={handleFormAdd}>
        <label htmlFor="">full_name </label>
        <input onChange={infoChange} name="full_name" type="text" />
        <label htmlFor="">phone</label>
        <input onChange={infoChange} name="phone" type="number" />
        <label htmlFor="">email</label>
        <input onChange={infoChange} name="email" type="email" />
        <label htmlFor="">address</label>
        <input onChange={infoChange} name="address" type="text" />
        <label htmlFor="">date_of_birth</label>
        <input
          onChange={infoChange}
          name="date_of_birth"
          type="datetime-local"
        />
        <input className="mt-3" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default InfoAdd;
