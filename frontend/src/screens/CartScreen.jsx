/* import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import Cart from '../components/Cart';

const CartScreen = ({ cartItems }) => {
    const [showCheckout, setShowCheckout] = useState(false);

    const handleCheckout = () => {
        // Implement your checkout logic here
        window.alert('Checkout functionality is not implemented yet!');
    };

    useEffect(() => {
        console.log('cartItems:', cartItems);
    }, [cartItems]);

    return (
        <Container>
            <h2 className="mt-3">Your Shopping Cart</h2>
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        {cartItems && cartItems.length > 0 ? (
                            cartItems.map(item => (
                                <ListGroup.Item key={item.id}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <p className="mb-0">{item.name}</p>
                                        </Col>
                                        <Col md={2}>${item.price}</Col>
                                        <Col md={2}>
                                            <select className="form-select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </Col>
                                        <Col md={2}>
                                            <Button type="button" variant="light">
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h4>Subtotal ({cartItems.length} items)</h4>
                            <h3>${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="btn-block"
                                disabled={cartItems.length === 0}
                                onClick={() => setShowCheckout(true)}
                            >
                                Proceed to Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

            {showCheckout && (
                <div className="mt-3">
                    {/* Add your checkout form or component here */
/*}
    <h2>Checkout Form</h2>
    {/* ... *}
    <Button type="button" onClick={handleCheckout}>
        Complete Purchase
    </Button>
</div>
)}
</Container>
);
};

export default CartScreen;
*/