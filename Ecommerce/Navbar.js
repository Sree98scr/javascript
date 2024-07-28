// import React, { useContext, useRef, useState } from 'react'
// import './Navbar.css'
// import logo from './Components/Assets/logo.png'
// import cart_icon from './Components/Assets/cart_icon.png'
// import nav_dropdown from './Components/Assets/nav_dropdown.png'
// import { Link } from 'react-router-dom'
// import { ShopContext }from './ShopContext.js'

// const Navbar = () => {

//     const [menu,setMenu] = useState("shop");
//     const {getTotalCartItems}= useContext(ShopContext);
    
//     const menuRef = useRef();

//     const dropdown_toggle = (e) => {
//       menuRef.current.classList.toggle('nav-menu-visible');
//       e.target.classList.toggle('open');
//     }

//   return (
//     <div className='navbar'>
//       <Link to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
//         <img src={logo} alt="" />
//         <p>SHOPPER</p>
//       </Link>
//       <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("womens")}}><Link to="womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//         <Link to='/login'><button>Login</button></Link>
//         <Link to='/cart'><img src={cart_icon} alt="" /></Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>
//       </div>
//     </div>
//   )
// }

// export default Navbar



// // import React, { useContext } from 'react';
// // import { ShopContext } from './ShopContext';

// // const Navbar = () => {
// //   const { getTotalCartItems } = useContext(ShopContext);

// //   if (!getTotalCartItems) {
// //     return <p>Loading...</p>; // Handle case where context is not yet available
// //   }

// //   return (
// //     <div className="navbar">
// //       <h1>My Shop</h1>
// //       <div className="cart-info">
// //         <p>Total Items in Cart: {getTotalCartItems()}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;




// import React, { useContext, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ShopContext } from './ShopContext';
// import './Navbar.css';
// import logo from './Components/Assets/logo.png';
// import cart_icon from './Components/Assets/cart_icon.png';
// import nav_dropdown from './Components/Assets/nav_dropdown.png';

// const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const { getTotalCartItems } = useContext(ShopContext);
//     const menuRef = useRef();

//     const dropdown_toggle = (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     }

//     return (
//         <div className='navbar'>
//             <Link to='/' onClick={() => setMenu("shop")} className="nav-logo">
//                 <img src={logo} alt="Shop Logo" />
//                 <p>SHOPPER</p>
//             </Link>
//             <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="Menu Dropdown" />
//             <ul ref={menuRef} className="nav-menu">
//                 <li onClick={() => setMenu("shop")}>
//                     <Link to='/'>Shop</Link>
//                     {menu === "shop" && <hr />}
//                 </li>
//                 <li onClick={() => setMenu("mens")}>
//                     <Link to='/mens'>Men</Link>
//                     {menu === "mens" && <hr />}
//                 </li>
//                 <li onClick={() => setMenu("womens")}>
//                     <Link to='/womens'>Women</Link>
//                     {menu === "womens" && <hr />}
//                 </li>
//                 <li onClick={() => setMenu("kids")}>
//                     <Link to='/kids'>Kids</Link>
//                     {menu === "kids" && <hr />}
//                 </li>
//             </ul>
//             <div className="nav-login-cart">
//                 <Link to='/login'><button>Login</button></Link>
//                 <Link to='/cart'>
//                     <img src={cart_icon} alt="Cart Icon" />
//                 </Link>
//                 <div className="nav-cart-count">{getTotalCartItems()}</div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;



import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import './Navbar.css';
import logo from './Components/Assets/logo.png';
import cart_icon from './Components/Assets/cart_icon.png';
import nav_dropdown from './Components/Assets/nav_dropdown.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <Link to='/' onClick={() => setMenu("shop")} className="nav-logo">
                <img src={logo} alt="Shop Logo" />
                <p>SHOPPER</p>
            </Link>
            <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="Menu Dropdown" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link to='/'>Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => setMenu("mens")}>
                    <Link to='/mens'>Men</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li onClick={() => setMenu("womens")}>
                    <Link to='/womens'>Women</Link>
                    {menu === "womens" && <hr />}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link to='/kids'>Kids</Link>
                    {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart Icon" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
