import React from "react"
import { Iproduct } from "../App"

//define a type of props
interface Productprops {
  product : Iproduct;
  handlerAddToCard(id : number):number;
}



const Product = ({product , handlerAddToCard} :Productprops ) => {
  return  <div>
     {/* <div>Product</div> */}
        <h1 style={{backgroundColor : "red"}}>
        {
            product.name
        }
        </h1>
        <h5>{product.id}</h5>
        <h5>{product.price}</h5>
        <button onClick={() => handlerAddToCard(product.id)}>Add TO Card</button>


  </div>
}

export default Product 