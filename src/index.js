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
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import Footer from './pages/shared/Footer/Footer';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
   <BrowserRouter>
   <Navigation/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/addInfo" element={<PrivateRoute><InfoAdd/></PrivateRoute>}/>
     <Route path="/customerList" element={<PrivateRoute><CustomerList/></PrivateRoute>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="*" element={<Error/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  </div>
 
);



