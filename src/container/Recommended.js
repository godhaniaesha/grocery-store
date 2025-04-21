import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Almonds from '../image/z_accets/Almonds3.png';
import Walnut from '../image/z_accets/Walnuts1.png'
import Cashews from '../image/z_accets/Cashews3.png';
import Image from '../image/z_accets/Dates 4.png';
import '../styles/Z_style.css';
import { FaShoppingCart, FaHeart, FaEye, FaStar, FaTimes, FaMinus, FaPlus } from 'react-icons/fa';

function Recommended(props) {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');

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
            title: "Moong Dal",
            subtitle: "Grains & Pulses",
            price: 45.00,
            originalPrice: 50.00,
            rating: 5.0,
            category: "Grains & Pulses",
            description: "Premium quality Moong Dal, perfect for everyday cooking."
        },
        {
            image: Image,
            title: "Pure Ghee",
            subtitle: "Oil & Ghee",
            price: 35.00,
            originalPrice: 40.00,
            rating: 4.5,
            category: "Oil & Ghee",
            description: "Pure and authentic ghee made from cow's milk."
        },
        {
            image: Almonds,
            title: "Garam Masala",
            subtitle: "Spices & Masala",
            price: 45.00,
            originalPrice: 50.00,
            rating: 5.0,
            category: "Spices & Masala",
            description: "Authentic blend of aromatic Indian spices."
        },
        {
            image: Image,
            title: "Fresh Paneer",
            subtitle: "Dairy & Bakery",
            price: 35.00,
            originalPrice: 40.00,
            rating: 4.5,
            category: "Dairy & Bakery",
            description: "Fresh and soft paneer made from pure milk."
        },
        {
            image: Almonds,
            title: "Fresh Vegetables Mix",
            subtitle: "Fruits & Vegetables",
            price: 55.00,
            originalPrice: 65.00,
            rating: 5.0,
            category: "Fruits & Vegetables",
            description: "Fresh assorted vegetables, hand-picked for quality."
        },
        {
            image: Cashews,
            title: "Green Tea",
            subtitle: "Beverages",
            price: 48.00,
            originalPrice: 60.00,
            rating: 4.8,
            category: "Beverages",
            description: "Pure green tea leaves for a refreshing experience."
        },
        {
            image: Walnut,
            title: "Mixed Dry Fruits",
            subtitle: "Snacks & Packaged Foods",
            price: 45.00,
            originalPrice: 50.00,
            rating: 5.0,
            category: "Snacks & Packaged Foods",
            description: "Premium quality mixed dry fruits pack."
        }
    ];
    const categoryDisplayNames = {
        'All': 'All',
        'Grains & Pulses': 'Grains',
        'Oil & Ghee': 'Oil',
        'Spices & Masala': 'Spices',
        'Dairy & Bakery': 'Dairy',
        'Fruits & Vegetables': 'Fruits',
        'Beverages': 'Beverages',
        'Snacks & Packaged Foods': 'Snacks'
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`z_star ${index < rating ? 'z_star-filled' : ''}`}
            />
        ));
    };
    // Get unique categories from products
    const categories = ['All', ...new Set(dummyProducts.map(product => product.category))];
    
    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All' 
        ? dummyProducts 
        : dummyProducts.filter(product => product.category === selectedCategory);

    return (
        <>
            <div className="a_header_container">
                <div className="d-flex justify-content-between align-items-center x_filter_btn mb-4">
                    <h2 className="mb-0">Recommended For you</h2>
                    <div className="d-flex gap-3">
                        {categories.map((category, index) => (
                            // Add this mapping object after dummyProducts array
                           
                            
                            // In the return statement, update the button rendering:
                                        <button
                                            key={index}
                                            className={`btn ${selectedCategory === category ? 'btn-success' : 'btn-outline-secondary'}`}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {categoryDisplayNames[category] || category}
                                        </button>
                        ))}
                    </div>
                </div>

                <div className="row">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="col-xl-2 col-lg-4 col-md-3 col-sm-6 mb-4">
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
                        </div>
                    ))}
                </div>
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
                                                <span className="z_modal-details-value">{selectedProduct.category}</span>
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

export default Recommended;