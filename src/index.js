import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import InfoAdd from './pages/InfoAdd/InfoAdd';
import Error from './pages/Error/Error';
import Navigation from './pages/shared/Navigation/Navigation';
import CustomerList from './pages/CustomerList/CustomerList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
   <BrowserRouter>
   <Navigation/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/addInfo" element={<InfoAdd/>}/>
     <Route path="/customerList" element={<CustomerList/>}/>
     <Route path="*" element={<Error/>}/>
   </Routes>
   </BrowserRouter>
  </div>
 
);



