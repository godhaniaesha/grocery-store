import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Almonds from '../image/z_accets/Almonds3.png';
import Walnut from '../image/z_accets/Walnuts1.png';
import Cashews from '../image/z_accets/Cashews3.png';
import Image from '../image/z_accets/Dates 4.png';
import '../styles/Z_style.css';
import '../styles/ProductDetail.css';
import {
    FaShoppingCart, FaHeart, FaEye, FaStar,
    FaTimes, FaMinus, FaPlus, FaChevronRight
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function SimilarProduct() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleClose = () => {
        setModalShow(false);
        setTimeout(() => {
            setShowModal(false);
            setQuantity(1);
        }, 200);
    };

    const handleShow = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
        setQuantity(1);
        setTimeout(() => setModalShow(true), 100);
    };

    const handleQuantityChange = (value) => {
        const newQuantity = quantity + value;
        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    };

    const dummyProducts = [
        {
            image: Walnut,
            title: "Walnut",
            subtitle: "Vitamin-c fruit",
            price: 45.00,
            originalPrice: 50.00,
            rating: 5.0,
            description: "Fresh and juicy Walnut packed with Vitamin C."
        },
        {
            image: Image,
            title: "Fresh Dates",
            subtitle: "Premium quality dates",
            price: 35.00,
            originalPrice: 40.00,
            rating: 4.5,
            description: "Premium quality dates, naturally sweet and nutritious. Great for energy and digestion."
        },
        {
            image: Almonds,
            title: "Organic Almonds",
            subtitle: "Premium nuts collection",
            price: 55.00,
            originalPrice: 65.00,
            rating: 5.0,
            description: "Organic almonds, rich in healthy fats and protein. Perfect for snacking or cooking."
        },
        {
            image: Cashews,
            title: "Cashew Nuts",
            subtitle: "Premium nuts selection",
            price: 48.00,
            originalPrice: 60.00,
            rating: 4.8,
            description: "Premium quality cashew nuts, creamy and delicious. Great source of healthy fats."
        },
        {
            image: Cashews,
            title: "Cashew Nuts",
            subtitle: "Premium nuts selection",
            price: 48.00,
            originalPrice: 60.00,
            rating: 4.8,
            description: "Premium quality cashew nuts, creamy and delicious. Great source of healthy fats."
        },
        {
            image: Cashews,
            title: "Cashew Nuts",
            subtitle: "Premium nuts selection",
            price: 48.00,
            originalPrice: 60.00,
            rating: 4.8,
            description: "Premium quality cashew nuts, creamy and delicious. Great source of healthy fats."
        },
        {
            image: Cashews,
            title: "Cashew Nuts",
            subtitle: "Premium nuts selection",
            price: 48.00,
            originalPrice: 60.00,
            rating: 4.8,
            description: "Premium quality cashew nuts, creamy and delicious. Great source of healthy fats."
        },
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`z_star ${index < rating ? 'z_star-filled' : ''}`}
            />
        ));
    };

    return (
        <>
            <div className="a_header_container db_similiar_prdct my-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="z_section-title">
                        <span className="z_title-highlight">Similar </span>
                        <span className="z_title-dark">products</span>
                    </h2>
                    <a href="#" className="z_view-all-link">
                        View All <FaChevronRight className="z_view-all-icon" />
                    </a>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        0: { slidesPerView: 1 },        // for screens from 0 to 424px
                        375: { slidesPerView: 2 },      // from 425px to 575px
                        576: { slidesPerView: 2 },      // from 576px to 767px
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 }
                      }}
                >
                    {dummyProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <Card className="z_product-card">
                                <div className="z_product-image-container">
                                    <Card.Img variant="top" src={product.image} alt={product.title} />
                                    <div className="z_hover-overlay">
                                        <div className="z_hover-icons">
                                            <button className="z_hover-icon-btn">
                                                <FaShoppingCart />
                                            </button>
                                            <button className="z_hover-icon-btn">
                                                <FaHeart />
                                            </button>
                                            <button
                                                className="z_hover-icon-btn"
                                                onClick={() => handleShow(product)}
                                            >
                                                <FaEye />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Card.Body className="z_card-body">
                                    <div className="z_rating-container">
                                        {renderStars(product.rating)}
                                        <span className="z_rating-text">({product.rating})</span>
                                    </div>
                                    <Card.Title className="z_product-title">{product.title}</Card.Title>
                                    <Card.Text className="z_product-subtitle">
                                        {product.subtitle}
                                    </Card.Text>
                                    <div className="z_price-container">
                                        <span className="z_current-price">${product.price.toFixed(2)}</span>
                                        <span className="z_original-price">${product.originalPrice.toFixed(2)}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Body className="p-0 position-relative">
                    {selectedProduct && (
                        <>
                            <button onClick={handleClose} className="z_modal-close-btn">
                                <FaTimes className="z_modal-close-icon" />
                            </button>
                            <div className="row g-0">
                                <div className="col-md-6 position-relative">
                                    <div className="modal-img-wrapper">
                                        <img
                                            src={selectedProduct.image}
                                            alt={selectedProduct.title}
                                            className="z_modal-product-img"
                                        />
                                        <span className="z_modal-discount-badge">-26%</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="z_modal-content">
                                        <h3 className="mb-3">{selectedProduct.title}</h3>
                                        <div className="z_rating-container mb-4">
                                            {renderStars(selectedProduct.rating)}
                                            <span className="z_rating-text ms-2">({selectedProduct.rating} customer review)</span>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="h3 mb-0">${selectedProduct.price.toFixed(2)}</span>
                                                <span className="text-decoration-line-through text-muted">
                                                    ${selectedProduct.originalPrice.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-muted mb-4">{selectedProduct.description}</p>
                                        <div className="z_modal-quantity-container">
                                            <div className="z_modal-quantity-selector">
                                                <button
                                                    className="z_modal-quantity-btn"
                                                    onClick={() => handleQuantityChange(-1)}
                                                    disabled={quantity === 1}
                                                >
                                                    <FaMinus size={12} />
                                                </button>
                                                <span className="z_modal-quantity-number">
                                                    {quantity}
                                                </span>
                                                <button
                                                    className="z_modal-quantity-btn"
                                                    onClick={() => handleQuantityChange(1)}
                                                    disabled={quantity === 10}
                                                >
                                                    <FaPlus size={12} />
                                                </button>
                                            </div>
                                            <button className="z_modal-add-cart-btn">
                                                Add to cart
                                                <FaShoppingCart className="z_cart-icon" />
                                            </button>
                                        </div>
                                        <div className="z_modal-details">
                                            <div className="z_modal-details-item">
                                                <span className="z_modal-details-label">SKU:</span>
                                                <span className="z_modal-details-value">{selectedProduct.id || '9852434'}</span>
                                            </div>
                                            <div className="z_modal-details-item">
                                                <span className="z_modal-details-label">Category:</span>
                                                <span className="z_modal-details-value">Body & Bath</span>
                                            </div>
                                            <div className="z_modal-details-item">
                                                <span className="z_modal-details-label">Brand:</span>
                                                <span className="z_modal-details-value">Premium Collection</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SimilarProduct;
