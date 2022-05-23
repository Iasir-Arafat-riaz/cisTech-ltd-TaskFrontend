import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/home" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  </div>
 
);



