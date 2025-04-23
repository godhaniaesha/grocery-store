import React, { useState, useRef } from 'react';
import { FaShoppingCart, FaMinus, FaPlus, FaStar, FaStarHalfAlt, FaHeart, FaShare, FaTag, FaBox } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/ProductDetail.css';
import SearchHeader from './SearchHeader';
import Footer from './Footer';
import WalnutImg from '../image/z_accets/Walnuts1.png';
import AlmondImg from '../image/z_accets/Almonds3.png';
import CashewImg from '../image/z_accets/Cashews3.png';
import Recommended from './Recommended';
import SimilarProduct from './SimilarProduct';

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [showShareTooltip, setShowShareTooltip] = useState(false);
    const mainImageRef = useRef(null);

    const product = {
        id: 1,
        name: 'Stretch Strap Top',
        price: 99.99,
        discountPrice: 79.99,
        rating: 4.5,
        reviews: 154,
        stock: 50,
        description: 'The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact.',
        images: [WalnutImg, AlmondImg, CashewImg],
        weights: ['100g', '250g', '500g', '1kg', '2kg'],
        category: 'GROCERY',
        tags: ['Organic', 'Premium Quality', 'Natural', 'Healthy', 'Fresh', 'Handpicked']
    };

    const [selectedWeight, setSelectedWeight] = useState('500g');

    const handleQuantityChange = (action) => {
        if (action === 'increase' && quantity < product.stock) {
            setQuantity(prev => prev + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`star-${i}`} className="text-warning" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half-star" className="text-warning" />);
        }
        return stars;
    };

    const calculateDiscount = () => {
        const discount = ((product.price - product.discountPrice) / product.price) * 100;
        return Math.round(discount);
    };

    return (
        <>
            <Container className="db_product-main product-detail-container">
                <Row>
                    <Col md={6} className="product-images" >
                        <motion.div
                            className="main-image-container mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.img
                                key={selectedImage}
                                ref={mainImageRef}
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="img-fluid rounded main-image"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="image-actions">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="action-btn wishlist-btn"
                                    onClick={() => setIsWishlisted(!isWishlisted)}
                                >
                                    <FaHeart className={isWishlisted ? 'text-danger' : ''} />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="action-btn share-btn"
                                    onClick={() => setShowShareTooltip(!showShareTooltip)}
                                >
                                    <FaShare />
                                </motion.button>
                                <AnimatePresence>
                                    {showShareTooltip && (
                                        <motion.div
                                            className="share-tooltip"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                        >
                                            <p className="mb-2">Share this product:</p>
                                            <div className="d-flex gap-2">
                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer">Facebook</a>
                                                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noreferrer">Twitter</a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                        <div className="thumbnail-container d-flex">
                            {product.images.map((img, index) => (
                                <motion.img
                                    key={index}
                                    src={img}
                                    alt={`${product.name} ${index + 1}`}
                                    className={`thumbnail-image ${selectedImage === index ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                />
                            ))}
                        </div>
                    </Col>
                    <Col md={6} className="product-info">
                        <motion.div className="product-header">
                            <motion.h1
                                className="product-title"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {product.name}
                            </motion.h1>
                            <motion.div
                            className="product-tags"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {product.tags.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className="product-tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                        </motion.div>
                        <motion.div
                            className="product-rating"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="rating-stars">
                                {renderStars(product.rating)}
                            </div>
                            <span className="review-count">({product.reviews} reviews)</span>
                        </motion.div>
                        <motion.div
                            className="product-price"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            ${product.discountPrice}
                            <span className="original-price">${product.price}</span>
                            <span className="discount-badge">{calculateDiscount()}% OFF</span>
                        </motion.div>
                        <motion.p
                            className="product-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {product.description}
                        </motion.p>
                        <motion.div className="weight-selector" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                            <div className="weight-header">
                                <span className="selector-label">Weight: {selectedWeight}</span>
                            </div>
                            <div className="weight-options">
                                {product.weights.map((weight) => (
                                    <button
                                        key={weight}
                                        className={`weight-btn ${selectedWeight === weight ? 'active' : ''}`}
                                        onClick={() => setSelectedWeight(weight)}
                                    >
                                        {weight}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="quantity-control"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                        <motion.p className="border mb-0" style={{borderRadius:'30px',display:'flex',justifyContent:'center',alignItems:'center',width:'150px'}}>
                        <button
                                className="quantity-btn"
                                onClick={() => handleQuantityChange('decrease')}
                                disabled={quantity <= 1}
                            >
                                <FaMinus />
                            </button>
                            <input
                                type="text"
                                className="quantity-input"
                                value={quantity}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    if (value >= 1 && value <= product.stock) {
                                        setQuantity(value);
                                    }
                                }}
                                min="1"
                                max={product.stock}
                            />
                            <button
                                className="quantity-btn"
                                onClick={() => handleQuantityChange('increase')}
                                disabled={quantity >= product.stock}
                            >
                                <FaPlus />
                            </button>
                        </motion.p>
                            <motion.button
                            className="add-to-cart-btn"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaShoppingCart /> Add to Cart
                        </motion.button>
                        </motion.div>
                       
                        <motion.div
                            className="product-meta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="meta-item">
                                <FaTag />
                                <span className="meta-label">Category:</span>
                                <span>{product.category}</span>
                            </div>
                            <div className="meta-item">
                                <FaBox />
                                <span className="meta-label">Stock:</span>
                                <span>{product.stock} items available</span>
                            </div>
                        </motion.div>

                     
                        
                    </Col>
                </Row>
            </Container>
            <SimilarProduct></SimilarProduct>
        </>
    );
};

export default ProductDetail;
