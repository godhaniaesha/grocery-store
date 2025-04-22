import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import '../styles/footer.css'; // You'll need to create this CSS file

const Footer = () => {
  return (
    <footer className="db_footer footer bg-dark text-white py-5">
      <Container>
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Fresh Market</h5>
            <p>
              Your one-stop destination for fresh produce, pantry essentials, and specialty foods.
              We bring quality groceries directly to your doorstep.
            </p>
            <div className="social-icons">
              <a href="#" className="me-3 text-white"><FaFacebook size={24} /></a>
              <a href="#" className="me-3 text-white"><FaTwitter size={24} /></a>
              <a href="#" className="me-3 text-white"><FaInstagram size={24} /></a>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Shop</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Categories</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Special Offers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">My Account</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Order Tracking</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Wishlist</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Shipping Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Return Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">FAQs</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact Info</h5>
            <ul className="list-unstyled contact-info">
              <li className="mb-3 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" />
                <span>123 Market Street, City Center, State 12345</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-2" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-2" />
                <span>info@freshmarket.com</span>
              </li>
              <li className="d-flex align-items-center">
                <FiClock className="me-2" />
                <span>Mon-Sat: 8:00 AM - 9:00 PM<br />Sunday: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </Col>
        </Row>

<hr />
        <Row>
          <Col className="text-center pt-3">
            <p className="mb-0">
              © {new Date().getFullYear()} Fresh Market. All Rights Reserved.
            </p>
            <p className="mb-0 text-white-50 small mt-2">
              Made with <AiFillHeart className="text-danger" /> for our valued customers
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;