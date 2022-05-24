import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Loader from "../shared/Loader/Loader";
import "./CustomerList.css";
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
  const [data, setData] = useState([]);
  const [searchDetals, setSearchDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const size=5
  useEffect(() => {
    setLoading(true);
    fetch(`https://peaceful-plains-87228.herokuapp.com/customerDetails?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails([...data.result]);
        setData([...data.result]);
        const count = data.count;
        const pageNum = Math.ceil(count / size);
        setPageCount(pageNum);
        setLoading(false);
      });
  }, [page]);

  const searchByName = (value) => {
    setSearchDetails(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCase = value.toLowerCase().trim();
    if (!lowerCase) {
      setDetails(data);
    } else {
      const filteredData = details.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCase);
        });
      });
      setDetails(filteredData);
    }
  };

  const removeInfo = (id) => {
    const uri = `https://peaceful-plains-87228.herokuapp.com/customerDetails/${id}`;
    const exist = window.confirm("Are You sure want to delete ??");
    if (exist) {
      fetch(uri, {
        method: "DELETE",
      })
        .then()
        .then((data) => {
          console.log(data.status);
          if (data.status == 200) {
            const remainingInfo = details.filter((info) => info._id !== id);
            setDetails(remainingInfo);
          }
        });
    }
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mb-5">
      <h1 className="text-center">CustomerList</h1>

      <div id="searchField">
        <input
          onChange={(e) => searchByName(e.target.value)}
          value={searchDetals}
          placeholder="seach from here"
          type="text"
        />
        <button onClick={() => window.location.reload()}>Reload</button>
        <br />
        {details.length === 0 && <span>No Data Found</span>}
      </div>
      <Table className="tableBody" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, id) => (
            <tr>
              <td>{id + 1}</td>
              <td>{detail?.full_name}</td>
              <td>{detail?.phone}</td>
              <td>{detail?.email}</td>
              <td>{detail?.address}</td>
              <td>{detail?.date_of_birth}</td>
              <Button
                onClick={() => removeInfo(detail?._id)}
                variant="outline-danger"
              >
                Remove
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="pagination">
        {[...Array(pageCount).keys()].map((num) => (
          <Button key={num} className={num===page?"selected":""} onClick={()=>setPage(num)} >{num + 1}</Button>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
