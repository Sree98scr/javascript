// import React from 'react';
// import './App.css';
// import Navbar from './Components/Navbar';
// import {BrowserRouter,Routes,Route}from 'react-router-dom';
// import Shop from './Shop'; // Ensure these components are correctly imported
// import ShopCategory from './ShopCategory';
// // import Products from './Products';
// import Product from './Product';
// import Cart from './Cart';
// import Loginsignup from './Loginsignup';
// import Footer from './Footer/Footer';
// import men_banner from './Components/Assets/banner_mens.png';
// import women_banner from './Components/Assets/banner_women.png';
// import kids_banner from './Components/Assets/banner_kids.png';
// function App() {
//   return (
//     <div  >
//   <BrowserRouter>
//     <Navbar/>
//     <Routes>
//       <Route path='/' element={<Shop/>} />
//       <Route path='/Men' element={<ShopCategory banner={men_banner} category="Women"/>} />
//       <Route path='/Women' element={<ShopCategory banner={women_banner} category="Mens"/>} />
//       <Route path='/Kids' element={<ShopCategory banner={kids_banner} category="Kids"/>} />
//   <Route path="/Product" element={<Product/>}>
//   <Route path=":ProductId" element={<Product/>} />
//   </Route>
//   <Route path="/Cart" element={<Cart/>} />  
//   <Route path="/Login" element={<Loginsignup/>} />

//     </Routes>
//     <Footer/>
// </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Shop'; 
import ShopCategory from './ShopCategory';
import Product from './Product';
import Cart from './Cart';
import Loginsignup from './Loginsignup';
import Footer from './Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Men' element={<ShopCategory banner={men_banner} category="Men" />} />
          <Route path='/Women' element={<ShopCategory banner={women_banner} category="Women" />} />
          <Route path='/Kids' element={<ShopCategory banner={kids_banner} category="Kids" />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
