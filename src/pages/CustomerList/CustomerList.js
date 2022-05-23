import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const customerList = [
  {
    full_name: "Iasir Arafat Riaz",
    phone: "0162211883",
    email: "iasir.arafat.riaz@gmail.com",
    address: "1683manda",
    date_of_birth: "2013-07-23T02:30",
  },
  {
    full_name: "mohsin arafat miraz",
    phone: "016768954",
    email: "mohsin@gmail.com",
    address: "78 Dhanmondhi",
    date_of_birth: "2017-07-23T02:30",
  },
  {
    full_name: "rishad hasan",
    phone: "01722284648",
    email: "rishad@gmail.com",
    address: "kalabagan",
    date_of_birth: "2001-09-20T02:30",
  },
];
const CustomerList = () => {
  const [details, setDetails] = useState([]);
  const [searchDetals,setSearchDetails]=useState([])

  useEffect(() => {
    fetch("./customer.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const searchByName=(e)=>{
      console.log(e.target.value)
     setSearchDetails(e.target.value)
  }
  const search =details.filter(detai=>detai.full_name.toLowerCase().includes(searchDetals.toLowerCase())) 
  return (
    <div>
      <h1>CustomerList</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>
              Full Name <input onChange={searchByName} placeholder="seach by name" type="text" />
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {search.map((detail, id) => (
            <tr>
              <td>{id + 1}</td>
              <td>{detail.full_name}</td>
              <td>{detail.phone}</td>
              <td>{detail.email}</td>
              <td>{detail.address}</td>
              <td>{detail.date_of_birth}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerList;
