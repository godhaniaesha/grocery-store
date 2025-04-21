import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import dessertImage from '../image/granos 1.png';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="db_about-us py-5">
      <Container>
      <h2 className="db_about_heading text-center fw-bold mb-5">
  <span className="db_about_text">ABOUT US</span>
  <span className="db_underline"></span>
</h2>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="db_about-image position-relative">
              <img src={dessertImage} alt="Chocolate desserts" className="img-fluid rounded shadow" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="db_about-content">
              <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <div className="db_tabs-modern" id="tabs-1">
                  <div className="db_nav-tabs-wrap mb-4">
                    <Nav variant="tabs" className="db_nav-tabs-modern" role="tablist">
                      {['mission', 'values', 'goals'].map((tab, index) => (
                        <Nav.Item key={tab}>
                          <Nav.Link
                            eventKey={tab}
                            className={`d-flex align-items-center db_tab-link ${activeTab === tab ? 'active' : ''}`}
                          >
                            <span className="db_tab-number">{String(index + 1).padStart(2, '0')}</span>
                            <span className="db_tab-text">{`OUR ${tab.toUpperCase()}`}</span>
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>
                  <Tab.Content className="db_tab-content position-relative">
                    <Tab.Pane eventKey="mission">
                      <div className="db_content-box">
                        <h3 className="db_content-title">Providing Quality Baked Goods for All Customers</h3>
                        <p className="db_content-text">Our mission is to create a bakery that makes the best quality baked goods on site from scratch, and where both employees and customers would feel comfortable.</p>
                        <a className="db_content-link" href="#">Discover More <span>→</span></a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="values">
                      <div className="db_content-box">
                        <h3 className="db_content-title">Ensuring the Best Atmosphere for Everyone</h3>
                        <p className="db_content-text">We see the most important part of our business in ensuring the happiness of our staff and the satisfaction of our clients by creating a welcoming and caring atmosphere.</p>
                        <a className="db_content-link" href="#">Learn More <span>→</span></a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="goals">
                      <div className="db_content-box">
                        <h3 className="db_content-title">Serving Only the Freshest Baked Goods for You</h3>
                        <p className="db_content-text">We aim to deliver the best baked goods for corporate events and individual celebrations, while also offering the best level of customer service in the United States.</p>
                        <a className="db_content-link" href="#">Explore More <span>→</span></a>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .db_about-us {
          background-color: #fff;
        }

        .db_about-us .db_tab-content {
          position: relative;
        }

        .db_about-us .db_tab-content::before {
          position: absolute;
          content: '';
          top: 0;
          bottom: 0;
          left: 0;
          width: 44%;
          border: 15px solid #f5f5f5;
          z-index: -1;
        }

        .db_about-us .db_about-image img {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .db_about-us .db_tabs-modern {
          background: #fff;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .db_about-us .db_nav-tabs-modern {
          display: flex;
          gap: 1.5rem;
          border: none;
          margin-bottom: 1.5rem;
        }

        .db_about-us .db_tab-link {
          border: none !important;
          background: none !important;
          padding: 1rem !important;
          color: #666 !important;
          transition: all 0.3s ease;
          position: relative;
        }

        .db_about-us .db_tab-link:hover {
          color: #01693a !important;
        }

        .db_about-us .db_tab-link.active {
          color: #01693a !important;
        }

        .db_about-us .db_tab-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #01693a;
        }

        .db_about-us .db_tab-number {
          font-size: 1.5rem;
          font-weight: 700;
          margin-right: 1rem;
          color: #01693a;
          opacity: 0.3;
        }

        .db_about-us .db_tab-link.active .db_tab-number {
          opacity: 1;
        }

        .db_about-us .db_tab-text {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .db_about-us .db_content-box {
          padding: 2rem;
          background: linear-gradient(145deg, #fff, #f8f9fa);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .db_about-us .db_content-title {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .db_about-us .db_content-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          margin-bottom: 2rem;
        }

        .db_about-us .db_content-link {
          display: inline-flex;
          align-items: center;
          color: #01693a;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .db_about-us .db_content-link span {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .db_about-us .db_content-link:hover {
          color: #ff1493;
        }

        .db_about-us .db_content-link:hover span {
          transform: translateX(5px);
        }
.db_about_heading {
  font-size: 3rem;
  position: relative;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #01693a;
  background-image: linear-gradient(90deg, #01693a, #00b894);
  -webkit-background-clip: text;
  background-clip: text;
  animation: db_fadeInText 1s ease forwards;
}
.db_about_text {
  display: inline-block;
  position: relative;
  z-index: 1;
}

.db_underline {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #01693a, #00b894);
  margin: 12px auto 0;
  border-radius: 10px;
  animation: db_underline_animate 0.8s ease forwards;
}

@keyframes db_underline_animate {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 80px;
    opacity: 1;
  }
}
  @keyframes db_fadeInText {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

        @media (max-width: 768px) {
        .db_about_heading {
    font-size: 2rem;
  }

  .db_underline {
    width: 50px;
  }
          .db_about-us .db_nav-tabs-modern {
            flex-direction: column;
            gap: 0.5rem;
          }

          .db_about-us .db_tab-link {
            width: 100%;
            text-align: left;
          }

          .db_about-us .db_content-title {
            font-size: 1.5rem;
          }

          .db_about-us .db_content-text {
            font-size: 1rem;
          }

          .db_about-us .db_content-box {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
