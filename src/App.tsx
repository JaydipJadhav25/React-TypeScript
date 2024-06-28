import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Components/Product"


export  interface Iproduct{
  id : number;
  name : string;
  price : number;
}



function App() {

  const[products , setproduct] = useState<Iproduct[]>([
    //set bydefult product
    {
      id : 1,
      name : "Iphone",
      price : 30000
    },
    {
      id : 2,
      name : "Macbook",
      price : 40000
    },
    {
      id : 3,
      name : "android",
      price : 50000
    }
  ])

  //recive function

  function addCardProdect(id : number){
    console.log("card id : " , id)
    
    return id;

  }

  return (
    
      <>
      {
        products.map(product=> <Product product ={product} 
          handlerAddToCard ={addCardProdect}
          key={product.id}/>)
      }

     
      </>
 
  );
}

export default App;
