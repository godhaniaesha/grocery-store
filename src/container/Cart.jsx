import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import '../styles/Cart.css';
import Footer from './Footer';
import SearchHeader from './SearchHeader';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            image: require('../image/z_accets/Almonds3.png'),
            title: 'Floral Print Wrap Dress',
            color: 'Blue',
            size: '42',
            price: 20.50,
            quantity: 2
        },
        {
            id: 2,
            image: require('../image/z_accets/Almonds3.png'),
            title: 'Floral Print Wrap Dress',
            color: 'Blue',
            size: '42',
            price: 30.50,
            quantity: 1
        }
    ]);

    const handleQuantityChange = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
    <>
    <SearchHeader></SearchHeader>
            <Container className="db_cart a_header_container my-5">
            <h2 className="cart-title mb-4">Shopping Bag</h2>
            <p className="items-count">{cartItems.length} items in your bag</p>

            <Row>
                <Col lg={8}>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="item-details">
                                <div className="item-header">
                                    <h3>{item.title}</h3>
                                    <button 
                                        className="remove-btn"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                                <div className="item-attributes">
                                    <span>Color: {item.color}</span>
                                    <span>Size: {item.size}</span>
                                </div>
                                <div className="item-price">${item.price.toFixed(2)}</div>
                                <div className="quantity-control">
                                    <button 
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        disabled={item.quantity === 1}
                                    >
                                        <FaMinus />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>

                <Col lg={4}>
                    <div className="cart-summary">
                        <h3>Cart Total</h3>
                        <div className="summary-row">
                            <span>Cart Subtotal</span>
                            <span>${calculateSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Design by Fluttertop</span>
                            <span>Free</span>
                        </div>
                        <div className="summary-row total">
                            <span>Cart Total</span>
                            <span>${calculateSubtotal().toFixed(2)}</span>
                        </div>
                        <Button className="checkout-btn">Apply</Button>
                    </div>

                    <div className="shipping-calculator mt-4">
                        <h3>Calculated Shipping</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Select>
                                    <option>Select Country</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Select>
                                    <option>Select State/City</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="ZIP Code" />
                            </Form.Group>
                            <Button className="update-btn">Update</Button>
                        </Form>
                    </div>

                    <div className="coupon-section mt-4">
                        <h3>Coupon Code</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter your coupon code" />
                            </Form.Group>
                            <Button className="apply-btn">Apply</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
    </>
    );
};

export default Cart;