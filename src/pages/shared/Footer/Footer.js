import React from "react";
import "./Footer.css"



const Footer = () => {
  
  return (
    <div className="footer">
      <div className="row">
       
        <div  className="footerColumn col-md-5">
            
          
          <div>
              <h2 className="footerCoName mx-2 ">CIS Tech LTD</h2>
           
            <p>Dhaka,Bangladesh</p>
            <p>
              <b>Hotline: +8801761807610</b>
            </p>
          </div>
        </div>
        <div className=" col-md-2">
             <p>
            <b>Social Links</b>
          </p>
         <a target="_blank" href="https://www.facebook.com/cistechltd">Facebook</a>
         <a target="_blank" href="https://www.linkedin.com/company/cis-tech-ltd/">Linkedin</a>
         <a target="_blank" href="https://cistechltd.com/?fbclid=IwAR1v5tNF3crBXFPB0MMgd4CaQC9xNAm5n4MS38xzXYuYg1gnlNQalVlxpd8">Web</a>
        
        
        </div>
        <div className="col-md-2">
            <p>
            <b>Products</b>
          </p>
          
          <p>Hardware</p>
          
          <p>Software</p>
        </div>
        <div className="col-md-2">
          <p>
            <b>Support</b>
          </p>
          <p>Help Center</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <hr />
      <p className="text-center">
        <small>
          &copy;Copyright © 2022 CIS Tech LTD.
        </small>
      </p>
    </div>
  );
};

export default Footer;
