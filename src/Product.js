import React from "react";
import { useDispatch } from "react-redux";
import { addToCart , removeFromCart } from "./Actions/Cart";

import  Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



export default function Product({product}) {
    const {title , description , category , isInCart} = product;
    const dispatch = useDispatch();
    return  (
        // <div className="product">
        //   <h3>{product.title}</h3>
        //   <p>{product.description}</p>
        //   <p className="price">Price: {product.price}</p>
    
        //   {product.isInCart ? (
        //     <button onClick={() => dispatch(removeFromCart(product.id))}>
        //       Remove from Cart
        //     </button>
        //   ) : (
        //     <button onClick={() => dispatch(addToCart(product))}>
        //       Add to Cart
        //     </button>
        //   )}
        // </div>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{category}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {isInCart ? (
              <Button
                onClick={() => dispatch(removeFromCart(product.id))}
                variant="danger"
              >
                Remore from Cart
              </Button>
            ) : (
              <Button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </Button>
            )}
          </Card.Footer>
        </Card>
      );
}