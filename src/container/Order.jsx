import React, { useState } from "react";
import { FaBox, FaTag, FaLeaf, FaPlus, FaMinus, FaTruck, FaCalendarAlt } from "react-icons/fa";
import {
  Button,
  Card,
  Image,
  Row,
  Col,
  Toast,
  ToastContainer,
  Badge,
  Form
} from "react-bootstrap";

const styles = {
  card: {
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.1)",
    border: "none",
    overflow: "hidden",
    marginBottom: "20px",
  },
  header: {
    color: "#213448",
    fontWeight: "bold",
    fontSize: "1.8rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  orderStatus: {
    padding: "8px 15px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "600",
    backgroundColor: "#e9f1f6",
    color: "#213448",
    display: "inline-block"
  },
  orderInfo: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    marginBottom: "20px"
  },
  deliveryAddress: {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    border: "1px dashed #213448",
    marginBottom: "20px"
  }
};

const Order = () => {
  const [orderItems] = useState([
    {
      id: 1,
      name: "Organic Almonds",
      price: 2.49,
      quantity: 3,
      image: require("../image/z_accets/Almonds3.png"),
      status: "Processing"
    },
    {
      id: 2,
      name: "Premium Cashews",
      price: 1.99,
      quantity: 2,
      image: require("../image/z_accets/Cashews3.png"),
      status: "Shipped"
    }
  ]);

  const orderDetails = {
    orderId: "ORD-2024-0123",
    orderDate: "January 23, 2024",
    expectedDelivery: "January 26, 2024",
    paymentMethod: "Credit Card",
    deliveryAddress: {
      name: "John Doe",
      street: "123 Green Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "+1 234-567-8900"
    }
  };

  const subtotal = orderItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container py-5" style={{ background: "#f9f9f9" }}>
      <h3 className="text-center mb-4" style={styles.header}>
        <FaLeaf className="me-2" />
        Order Details
      </h3>

      <Row className="gx-4">
        <Col xs={12} lg={8} className="mb-4">
          {/* Order Information */}
      

          {/* Order Items */}
          <Card style={styles.card}>
            <Card.Body>
              <h5 className="fw-bold mb-3">Order Items</h5>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Subtotal</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.map((item) => (
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
                        <td>{item.quantity}</td>
                        <td className="fw-bold" style={{color:'#213448'}}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td>{orderDetails.orderDate}</td>
                        <td>
                          <Badge bg={item.status === "Shipped" ? "success" : "warning"}>
                            {item.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Order Summary */}
        <Col xs={12} lg={4}>
          <Card style={styles.card}>
            <Card.Body>
              <h5 className="mb-3 fw-bold">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax</span>
                <span>${(parseFloat(subtotal) * 0.1).toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <strong style={{color:'#213448'}}>
                  ${(parseFloat(subtotal) * 1.1).toFixed(2)}
                </strong>
              </div>
              <div className="bg-light p-3 rounded">
                <h6 className="mb-2">Payment Information</h6>
                <p className="mb-0">
                  <FaTag className="me-2" />
                  Paid via {orderDetails.paymentMethod}
                </p>
              </div>
            </Card.Body>
          </Card>

          {/* <Button
            className="w-100 mt-3 shadow-sm fw-bold"
            style={{ borderRadius: "12px", backgroundColor: "#213448", border: '1px solid #213448' }}
          >
            Track Order
          </Button> */}
        </Col>
      </Row>
    </div>
  );
};

export default Order;