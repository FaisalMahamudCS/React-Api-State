import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">

 {/* <Counter></Counter> */}
 <ExternalUser></ExternalUser>
    </div>
  );


function ExternalUser(){
  const [users,setUsers]=useState([]);
  useEffect(  ()=>{
  
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setUsers(data))

  }, []);
  return (
    <div>
      <h3>External Users</h3>
      <p></p>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div style={{border:'2px solid red',margin:'20px'}}>
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}


function Counter(){
  const [count,setCount]=useState(0);
  const increaseCount=()=>{
    const newCount=count+1;
    setCount(newCount)
  }
  const decreaseCount=()=>{
    const newCount=count-1;
    setCount(newCount)
  }
  return (
    <div >
      <h1>Count:{count} </h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

// }
// const products=[
//   {name:'laptop',price:53000},
//   {name:'phone',price:93000},
//   {name:'watch',price:33000},
//   {name:'ipad',price:94000},
// ]
// {
//   products.map(product =><Product name={product.name} price={product.price}></Product>)
  
//   }


/* <Product name="laptop" price="80000"></Product>
<Product name="phone" price="75000"></Product> */}
// function Product(props){
//   return (
//     <div className="product">
//       <h3>Name:{props.name}</h3>
//       <p>Price:{props.price}</p>
//       </div>
//   )
// }

export default App;
