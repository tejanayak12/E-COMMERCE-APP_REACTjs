import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import ProductList from "./ProductList";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <h1>Ecommerce App</h1>
        <ProductList />
      </Container>
    </Provider>
  )
}