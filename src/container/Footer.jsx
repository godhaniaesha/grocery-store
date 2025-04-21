import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaSkype
} from 'react-icons/fa';
import image from  '../image/z_accets/Cashews3.png'
import '../styles/denisha.css'

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4 border-top">
      <Container>
        <Row className="mb-4">
          {/* Gallery */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-uppercase mb-4">Gallery</h5>
            <Row className="g-2">
              {[
                'Cashews1.png', 'Cashews2.png', 'Cashews3.png',
                'Cashews4.png', 'Cashews5.png', 'Cashews6.png'
              ].map((img, i) => (
                <Col xs={4} key={i}>
                  <img
                    src={image}
                    alt={`gallery-${i}`}
                    className="img-fluid rounded"
                  />
                </Col>
              ))}
            </Row>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-uppercase mb-4">Quick Links</h5>
            <Row>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>— About Us</li>
                  <li>— Our Team</li>
                  <li>— Shop</li>
                  <li>— Pricing</li>
                  <li>— FAQ</li>
                  <li>— Contact Us</li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>— What We Offer</li>
                  <li>— Our Blog</li>
                  <li>— Testimonials</li>
                  <li>— Baking School</li>
                  <li>— Our Recipes</li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Get in Touch */}
          <Col md={4}>
            <h5 className="fw-bold text-uppercase mb-4">Get In Touch</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i>523 Sylvan Ave, 5th Floor<br />Mountain View, CA 94041 USA</p>
            <p><i className="bi bi-telephone-fill me-2"></i>+1 (844) 123 456 78</p>
            <p><i className="bi bi-envelope-fill me-2"></i>info@demolink.org</p>
            <div className="d-flex gap-3 mt-3">
              <FaFacebookF className="text-dark fs-5" />
              <FaTwitter className="text-dark fs-5" />
              <FaInstagram className="text-dark fs-5" />
              <FaGooglePlusG className="text-dark fs-5" />
              <FaSkype className="text-dark fs-5" />
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="text-center text-muted small border-top pt-3">
          © 2025. Sweet Bakery. All Rights Reserved. <a href="#" className="text-decoration-none text-muted">Privacy Policy</a>.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
