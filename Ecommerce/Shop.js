


// import React, { useEffect, useState } from 'react'
// import Hero from './Hero'
// import Popular from './Popular/Popular'
// import Offers from './Offers/Offers'
// import NewCollections from './Newcollections/Newcollections'
// import Newsletter from './NewsLetter/Newsletter'

// const Shop = () => {

//   const [popular, setPopular] = useState([]);
//   const [newcollection, setNewCollection] = useState([]);

//   const fetchInfo = () => { 
//     fetch('http://localhost:3000/popularinwomen') 
//             .then((res) => res.json()) 
//             .then((data) => setPopular(data))
//     fetch('http://localhost:3000/newcollections') 
//             .then((res) => res.json()) 
//             .then((data) => setNewCollection(data))
//     }

//     useEffect(() => {
//       fetchInfo();
//     }, [])


//   return (
//     <div>
//       <Hero/>
//       <Popular data={popular}/>
//       <Offers/>
//       <NewCollections data={newcollection}/>
//       <Newsletter/>
//     </div>
//   )
// }

// export default Shop



import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Popular from './Popular/Popular'
import Offers from './Offers/Offers'
import NewCollections from './Newcollections/Newcollections'
import NewsLetter from './NewsLetter/Newsletter'

const Shop = () => {

  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/popularinwomen') 
            .then((res) => res.json()) 
            .then((data) => setPopular(data))
    fetch('http://localhost:4000/newcollections') 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <div>
      <Hero/>
      <Popular data={popular}/>
      <Offers/>
      <NewCollections data={newcollection}/>
      <NewsLetter/>
    </div>
  )
}

export default Shop