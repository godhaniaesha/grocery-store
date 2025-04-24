// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
// import '../styles/Cart.css';


// const Cart = () => {
//     const [cartItems, setCartItems] = useState([
//         {
//             id: 1,
//             image: require('../image/z_accets/Almonds3.png'),
//             title: 'Floral Print Wrap Dress',
//             color: 'Blue',
//             size: '42',
//             price: 20.50,
//             quantity: 2
//         },
//         {
//             id: 2,
//             image: require('../image/z_accets/Almonds3.png'),
//             title: 'Floral Print Wrap Dress',
//             color: 'Blue',
//             size: '42',
//             price: 30.50,
//             quantity: 1
//         }
//     ]);

//     const handleQuantityChange = (id, change) => {
//         setCartItems(items =>
//             items.map(item =>
//                 item.id === id
//                     ? { ...item, quantity: Math.max(1, item.quantity + change) }
//                     : item
//             )
//         );
//     };

//     const handleRemoveItem = (id) => {
//         setCartItems(items => items.filter(item => item.id !== id));
//     };

//     const calculateSubtotal = () => {
//         return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//     };

//     return (
//     <>
//             <Container className="db_cart a_header_container my-5">
//             <h2 className="cart-title mb-4">Shopping Bag</h2>
//             <p className="items-count">{cartItems.length} items in your bag</p>

//             <Row>
//                 <Col lg={8}>
//                     {cartItems.map(item => (
//                         <div key={item.id} className="cart-item">
//                             <div className="item-image">
//                                 <img src={item.image} alt={item.title} />
//                             </div>
//                             <div className="item-details">
//                                 <div className="item-header">
//                                     <h3>{item.title}</h3>
//                                     <button 
//                                         className="remove-btn"
//                                         onClick={() => handleRemoveItem(item.id)}
//                                     >
//                                         <FaTimes />
//                                     </button>
//                                 </div>
//                                 <div className="item-attributes">
//                                     <span>Color: {item.color}</span>
//                                     <span>Size: {item.size}</span>
//                                 </div>
//                                 <div className="item-price">${item.price.toFixed(2)}</div>
//                                 <div className="quantity-control">
//                                     <button 
//                                         onClick={() => handleQuantityChange(item.id, -1)}
//                                         disabled={item.quantity === 1}
//                                     >
//                                         <FaMinus />
//                                     </button>
//                                     <span>{item.quantity}</span>
//                                     <button onClick={() => handleQuantityChange(item.id, 1)}>
//                                         <FaPlus />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Col>

//                 <Col lg={4}>
//                     <div className="cart-summary">
//                         <h3>Cart Total</h3>
//                         <div className="summary-row">
//                             <span>Cart Subtotal</span>
//                             <span>${calculateSubtotal().toFixed(2)}</span>
//                         </div>
//                         <div className="summary-row">
//                             <span>Design by Fluttertop</span>
//                             <span>Free</span>
//                         </div>
//                         <div className="summary-row total">
//                             <span>Cart Total</span>
//                             <span>${calculateSubtotal().toFixed(2)}</span>
//                         </div>
//                         <Button className="checkout-btn">Apply</Button>
//                     </div>


//                     <div className="coupon-section mt-4">
//                         <h3>Coupon Code</h3>
//                         <Form>
//                             <Form.Group className="mb-3">
//                                 <Form.Control type="text" placeholder="Enter your coupon code" />
//                             </Form.Group>
//                             <Button className="apply-btn">Apply</Button>
//                         </Form>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     </>
//     );
// };

// export default Cart;
import React, { useState } from "react";
import { FaTrashAlt, FaTag, FaLeaf, FaPlus, FaMinus } from "react-icons/fa";
import {
  Button,
  Card,
  Image,
  Row,
  Col,
  Toast,
  ToastContainer,
  Badge,
} from "react-bootstrap";

// Shared styles object (moved outside so both components can use it)
const styles = {
  card: {
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.1)",
    border: "none",
    overflow: "hidden",
    marginBottom: "20px",
  },
  quantityButtonmain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    width: "fit-content",
    borderRadius: "30px",
    boxShadow: "0px 0px 9px 1px rgba(51, 80, 50, 0.3) ",
  },
  quantityButton: {
    borderRadius: "50%",
    // padding: "8px 16px",
    backgroundColor: "#f5f5f5",
    border: "none",
    fontSize: "12px",
    color: "#213448",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s",
  },

  header: {
    color: "#213448",
    fontWeight: "bold",
    fontSize: "1.8rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  badge: {
    backgroundColor: "#213448",
    fontSize: "0.75rem",
    marginLeft: "10px",
  },
  customSelect: {
    width: "100%",
    padding: "12px 20px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#f8f9fa",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  selectWrapper: {
    position: "relative",
  },
  selectArrow: {
    color: "#213448",
    fontSize: "1.2rem",
  },
  selectDropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    overflow: "hidden",
    marginTop: "5px",
  },
  selectOption: {
    padding: "10px 20px",
    borderBottom: "1px solid #f1f1f1",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  selectOptionHover: {
    backgroundColor: "#f8f9fa",
  },
  toast: {
    backgroundColor: "#213448",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.1)",
  },
  productImage: {
    borderRadius: "8px",
    border: "2px solid #ddd",
  },
};

// Custom Select Component
const CustomSelect = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      className="custom-select-wrapper"
      onClick={() => setIsOpen(!isOpen)}
      style={styles.selectWrapper}
    >
      <div className="custom-select" style={styles.customSelect}>
        <span>{value ? value : "Select a coupon"}</span>
        <FaTag className="select-arrow" />
      </div>
      {isOpen && (
        <div className="select-dropdown" style={styles.selectDropdown}>
          {options.map(([code, percent]) => (
            <div
              key={code}
              className="select-option"
              onClick={() => handleSelect(code)}
              style={styles.selectOption}
            >
              {code} - {percent}% off
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Apples",
      price: 2.49,
      quantity: 3,
      image: require("../image/z_accets/Almonds3.png"),
    },
    {
      id: 2,
      name: "Whole Wheat Bread",
      price: 1.99,
      quantity: 2,
      image: require("../image/z_accets/Cashews3.png"),
    },
  ]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const validCoupons = {
    FRESH10: 10,
    GREEN20: 20,
  };

  const applyCoupon = () => {
    const discountValue = validCoupons[coupon] || 0;
    setDiscount(discountValue);
    setShowToast(true);
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discounted = total - (total * discount) / 100;
    return discounted.toFixed(2);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container py-5" style={{ background: "#f9f9f9" }}>
      <h3 className="text-center mb-4" style={styles.header}>
        <FaLeaf className="me-2" />
        FreshCart 🛒
      </h3>
      <Row className="gx-4">
      <Col xs={12} lg={8} className="mb-4">
  {cartItems.length === 0 ? (
    <Card className="p-5 text-center" style={styles.card}>
      <h5>Your cart is empty 🌱</h5>
      <p>Add some fresh products to get started!</p>
    </Card>
  ) : (
    <Card style={styles.card} className="p-3">
      <h5 className="fw-bold mb-3">Your Cart</h5>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <Image
                    src={item.image}
                    width={60}
                    height={60}
                    rounded
                    style={styles.productImage}
                  />
                </td>
                <td className="fw-semibold">{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <div style={styles.quantityButtonmain}>
                    <Button
                      style={styles.quantityButton}
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <FaMinus />
                    </Button>
                    <span className="mx-2 fw-bold">{item.quantity}</span>
                    <Button
                      style={styles.quantityButton}
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <FaPlus />
                    </Button>
                  </div>
                </td>
                <td className="fw-bold" style={{color:"#213448"}}>
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td>
                  <Button
                    variant="link"
                    className="text-danger p-0"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrashAlt />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )}
</Col>


        {/* Summary */}
        <Col xs={12} lg={4}>
          <Card style={styles.card} className="p-3">
            <Card.Body>
              <h5 className="mb-3 fw-bold">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div>
                <CustomSelect
                  options={Object.entries(validCoupons)}
                  value={coupon}
                  onChange={setCoupon}
                />
              </div>
              <Button
              style={{border:"1px solid #213448", background:"#fff", color:"#213448"}}
                // variant="outline-success"
                className="mt-3 w-100"
                onClick={applyCoupon}
              >
                Apply Coupon
              </Button>
              {discount > 0 && (
                <small className="mb-2 d-block"  style={{ color:"#213448"}}>
                  ✅ Coupon applied: <strong>{discount}%</strong> off!
                </small>
              )}
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <strong className=""  style={{ color:"#213448"}}>${calculateTotal()}</strong>
              </div>
              <Button
              // style={{backgroundColor:"#213448"}}
                // variant="success"
                className="w-100 shadow-sm fw-bold"
                style={{ borderRadius: "12px",border:"1px solid #213448", backgroundColor:"#213448" }}
              >
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Toast */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="light"
        >
          <Toast.Body className="text-success">
            🎉 Coupon applied! Enjoy your discount.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Cart;
