import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div style={{ color: "crimson", textAlign: "center", marginTop:"50px" }}>
        <h4>Please wait few second....</h4>
        <Spinner animation="border"  />
      </div>
    );
};

export default Loader;