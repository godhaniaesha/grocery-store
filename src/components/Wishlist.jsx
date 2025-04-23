import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import '../styles/Wishlist.css';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: 'Organic Bananas',
            price: 4.99,
            image: '/images/banana.jpg',
            quantity: 1
        },
        // Add more items as needed
    ]);

    const removeFromWishlist = (itemId) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
    };

    const addToCart = (item) => {
        // Implement add to cart functionality
        console.log('Added to cart:', item);
        // You can dispatch an action here to add the item to the cart
    };

    if (wishlistItems.length === 0) {
        return (
            <div className="db_wishlist">
                <div className="empty-wishlist">
                    <div className="empty-wishlist-content">
                        <img src="/images/empty-wishlist.png" alt="Empty Wishlist" />
                        <h3>Your Wishlist is Empty</h3>
                        <p>Discover and save your favorite items for later!</p>
                        <a href="/shop" className="shop-now-btn">
                            <FaShoppingCart className="btn-icon" />
                            Explore Products
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="db_wishlist">
            <div className="a_header_container">
                <h2 className="wishlist-title">My Wishlist</h2>
                <div className="items-count">
                    {wishlistItems.length} {wishlistItems.length === 1 ? 'Item' : 'Items'}
                </div>
            </div>
            
            <div className="wishlist-grid">
                {wishlistItems.map(item => (
                    <div key={item.id} className="wishlist-item">
                        <button 
                            className="remove-btn"
                            onClick={() => removeFromWishlist(item.id)}
                            aria-label="Remove from wishlist"
                        >
                            <FaHeart />
                        </button>
                        <div className="item-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="item-content">
                            <div className="item-header">
                                <h3>{item.name}</h3>
                            </div>
                            <div className="item-price">
                                ${item.price.toFixed(2)}
                            </div>
                            <button 
                                className="add-to-cart-btn"
                                onClick={() => addToCart(item)}
                            >
                                <FaShoppingCart className="btn-icon" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;