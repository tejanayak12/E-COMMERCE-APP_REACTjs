import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Actions/Products';
import Product from './Product';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [search, setSearch] = useState('');

  const cartItems = useSelector((state) => state.cart.cartItems);
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].price;
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error... {error}</p>;
  }

  let filterProducts = products;
  if (search) {
    filterProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <h2>Products List</h2>
      <section>
        CartInfo: {cartItems.length} Products and Total is{' '}
        <strong>{total}</strong>
      </section>
      <Card>
        <Card.Body>
          <Form.Control
            placeholder="Search for Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <p>Your Search for: {search}</p>
        </Card.Body>
      </Card>
      <Row>
        {filterProducts.map((product) => (
          <Col lg={4} style={{ marginBottom: '8px' }}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
