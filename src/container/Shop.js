import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Pagination, Modal, Offcanvas, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaEye, FaStar, FaTimes, FaMinus, FaPlus, FaChevronRight, FaFilter, FaSearch } from 'react-icons/fa';
import '../styles/Z_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Almonds from '../image/z_accets/Almonds3.png';
import Walnut from '../image/z_accets/Walnuts1.png';
import Cashews from '../image/z_accets/Cashews3.png';
import Image from '../image/z_accets/Dates 4.png';
import Shoptop from '../image/z_accets/Shoptop.png'

function Shop() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedWeights, setSelectedWeights] = useState([]);
    // const [priceRange, setPriceRange] = useState([0, 100]);
    const [priceRange, setPriceRange] = useState([10, 70]);
    const [discountRange, setDiscountRange] = useState([0, 100]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedWeightVariant, setSelectedWeightVariant] = useState({});
    const [z_sortBy, setZ_SortBy] = useState('popular');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

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

    const handleFilterClose = () => {
        setShowFilter(false);
        applyFilters();
    };

    const handleFilterShow = () => setShowFilter(true);

    // Apply filters to products
    const applyFilters = () => {
        let filtered = [...dummyProducts];

        // Apply search filter
        if (searchTerm) {
            const searchTermLower = searchTerm.toLowerCase();
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTermLower) ||
                product.subtitle.toLowerCase().includes(searchTermLower) ||
                product.description.toLowerCase().includes(searchTermLower)
            );
        }

        // Apply category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product =>
                selectedCategories.includes(product.categoryId)
            );
        }

        // Apply weight filter
        if (selectedWeights.length > 0) {
            filtered = filtered.filter(product =>
                selectedWeights.includes(product.weight)
            );
        }

        // Apply price range filter
        if (priceRange.length === 2) {
            filtered = filtered.filter(product =>
                product.price >= priceRange[0] && product.price <= priceRange[1]
            );
        }

        // Apply discount range filter
        if (discountRange.length === 2) {
            filtered = filtered.filter(product => {
                const discount = ((product.originalPrice - product.price) / product.originalPrice) * 100;
                return discount >= discountRange[0] && discount <= discountRange[1];
            });
        }

        setFilteredProducts(filtered);
    };

    // Initialize filtered products on component mount
    useEffect(() => {
        setFilteredProducts(dummyProducts);
    }, []);

    // Apply filters when any filter changes
    useEffect(() => {
        applyFilters();
    }, [selectedCategories, selectedWeights, priceRange, discountRange, searchTerm]);

    // Calculate pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to top of the product section
        document.querySelector('.Z_shop_section').scrollIntoView({ behavior: 'smooth' });
    };

    // Dynamic filter options
    const categories = [
        {
            id: 1,
            name: "Nuts",
            description: "Premium quality nuts rich in protein and healthy fats.",
            image: "nuts-category.jpg"
        },
        {
            id: 2,
            name: "Dried Fruits",
            description: "Sweet and nutritious dried fruits packed with natural goodness.",
            image: "dried-fruits-category.jpg"
        },
        {
            id: 3,
            name: "Seeds",
            description: "Nutrient-dense seeds perfect for healthy snacking and cooking.",
            image: "seeds-category.jpg"
        },
        {
            id: 4,
            name: "Spices",
            description: "Aromatic spices to enhance the flavor of your favorite dishes.",
            image: "spices-category.jpg"
        },
        {
            id: 5,
            name: "Grains",
            description: "Wholesome grains for nutritious meals and baking.",
            image: "grains-category.jpg"
        }
    ];

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories(prev => {
            if (prev.includes(categoryId)) {
                return prev.filter(id => id !== categoryId);
            } else {
                return [...prev, categoryId];
            }
        });
    };

    const handleWeightChange = (weightName) => {
        setSelectedWeights(prev => {
            // Standardize the weight name when adding/removing
            const standardizedWeight = weightName.toLowerCase() === "1kg" ? "1Kg" :
                weightName.toLowerCase() === "2kg" ? "2Kg" :
                    weightName;
            if (prev.includes(standardizedWeight)) {
                return prev.filter(weight => weight !== standardizedWeight);
            } else {
                return [...prev, standardizedWeight];
            }
        });
    };

    const handlePriceChange = (e) => {
        setPriceRange([0, parseInt(e.target.value)]);
    };

    const handleDiscountChange = (e) => {
        setDiscountRange([0, parseInt(e.target.value)]);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleResetFilters = () => {
        setSelectedCategories([]);
        setSelectedWeights([]);
        setPriceRange([0, 100]);
        setDiscountRange([0, 100]);
        setSearchTerm('');
        setFilteredProducts(dummyProducts);
    };

    const weightVariants = ["500g", "1Kg", "2Kg"];

    const handleWeightVariantSelect = (productId, weight) => {
        setSelectedWeightVariant(prev => ({
            ...prev,
            [productId]: weight
        }));
    };

    const handleSortChange = (value) => {
        setZ_SortBy(value);
        let sorted = [...filteredProducts];

        switch (value) {
            case 'popular':
                // Keep default order for popular
                break;
            case 'recent':
                // Reverse array for recent items
                sorted.reverse();
                break;
            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;
            default:
                break;
        }

        setFilteredProducts(sorted);
    };

    const dummyProducts = [
        // NUTS CATEGORY
        {
            id: 1,
            categoryId: 1,
            image: Walnut,
            title: "Walnut",
            subtitle: "Premium quality walnuts",
            price: 45.00,
            originalPrice: 50.00,
            rating: 5.0,
            description: "Fresh and nutritious walnuts packed with omega-3 fatty acids.",
            weight: "500g"
        },
        {
            id: 2,
            categoryId: 1,
            image: Almonds,
            title: "Organic Almonds",
            subtitle: "Premium nuts collection",
            price: 55.00,
            originalPrice: 65.00,
            rating: 5.0,
            description: "Organic almonds, rich in healthy fats and protein.",
            weight: "500g"
        },
        {
            id: 3,
            categoryId: 1,
            image: Cashews,
            title: "Cashew Nuts",
            subtitle: "Premium nuts selection",
            price: 48.00,
            originalPrice: 60.00,
            rating: 4.8,
            description: "Premium quality cashew nuts, creamy and delicious.",
            weight: "1Kg"
        },
        {
            id: 4,
            categoryId: 1,
            image: Almonds,
            title: "Pistachio Nuts",
            subtitle: "Premium nuts collection",
            price: 65.00,
            originalPrice: 75.00,
            rating: 4.9,
            description: "Fresh and flavorful pistachio nuts, perfect for snacking.",
            weight: "1Kg"
        },
        {
            id: 5,
            categoryId: 1,
            image: Walnut,
            title: "Brazil Nuts",
            subtitle: "Premium nuts selection",
            price: 58.00,
            originalPrice: 70.00,
            rating: 4.7,
            description: "Rich and creamy Brazil nuts, packed with selenium.",
            weight: "1Kg"
        },
        {
            id: 6,
            categoryId: 1,
            image: Cashews,
            title: "Macadamia Nuts",
            subtitle: "Premium nuts collection",
            price: 72.00,
            originalPrice: 85.00,
            rating: 4.9,
            description: "Buttery and rich macadamia nuts, a luxurious treat.",
            weight: "500g"
        },

        // DRIED FRUITS CATEGORY
        {
            id: 7,
            categoryId: 2,
            image: Image,
            title: "Fresh Dates",
            subtitle: "Premium quality dates",
            price: 35.00,
            originalPrice: 40.00,
            rating: 4.5,
            description: "Premium quality dates, naturally sweet and nutritious.",
            weight: "500g"
        },
        {
            id: 8,
            categoryId: 2,
            image: Image,
            title: "Dried Apricots",
            subtitle: "Premium dried fruits",
            price: 28.00,
            originalPrice: 35.00,
            rating: 4.6,
            description: "Sweet and tangy dried apricots, rich in fiber.",
            weight: "500g"
        },
        {
            id: 9,
            categoryId: 2,
            image: Image,
            title: "Dried Cranberries",
            subtitle: "Premium dried fruits",
            price: 32.00,
            originalPrice: 38.00,
            rating: 4.7,
            description: "Tart and sweet dried cranberries, perfect for snacking.",
            weight: "1Kg"
        },
        {
            id: 10,
            categoryId: 2,
            image: Image,
            title: "Dried Mango",
            subtitle: "Premium dried fruits",
            price: 30.00,
            originalPrice: 36.00,
            rating: 4.8,
            description: "Sweet and chewy dried mango, a tropical treat.",
            weight: "1Kg"
        },
        {
            id: 11,
            categoryId: 2,
            image: Image,
            title: "Dried Figs",
            subtitle: "Premium dried fruits",
            price: 38.00,
            originalPrice: 45.00,
            rating: 4.6,
            description: "Sweet and nutritious dried figs, rich in fiber.",
            weight: "1Kg"
        },
        {
            id: 12,
            categoryId: 2,
            image: Image,
            title: "Dried Blueberries",
            subtitle: "Premium dried fruits",
            price: 42.00,
            originalPrice: 48.00,
            rating: 4.9,
            description: "Sweet and tangy dried blueberries, packed with antioxidants.",
            weight: "1Kg"
        },

        // SEEDS CATEGORY
        {
            id: 13,
            categoryId: 3,
            image: Almonds,
            title: "Chia Seeds",
            subtitle: "Premium seeds collection",
            price: 25.00,
            originalPrice: 30.00,
            rating: 4.8,
            description: "Nutrient-rich chia seeds, perfect for smoothies and baking.",
            weight: "2Kg"
        },
        {
            id: 14,
            categoryId: 3,
            image: Almonds,
            title: "Flax Seeds",
            subtitle: "Premium seeds collection",
            price: 22.00,
            originalPrice: 28.00,
            rating: 4.7,
            description: "Omega-3 rich flax seeds, great for heart health.",
            weight: "2Kg"
        },
        {
            id: 15,
            categoryId: 3,
            image: Almonds,
            title: "Pumpkin Seeds",
            subtitle: "Premium seeds collection",
            price: 28.00,
            originalPrice: 35.00,
            rating: 4.6,
            description: "Crunchy and nutritious pumpkin seeds, rich in minerals.",
            weight: "1Kg"
        },
        {
            id: 16,
            categoryId: 3,
            image: Almonds,
            title: "Sunflower Seeds",
            subtitle: "Premium seeds collection",
            price: 20.00,
            originalPrice: 25.00,
            rating: 4.5,
            description: "Delicious and nutritious sunflower seeds, perfect for snacking.",
            weight: "2Kg"
        },
        {
            id: 17,
            categoryId: 3,
            image: Almonds,
            title: "Sesame Seeds",
            subtitle: "Premium seeds collection",
            price: 18.00,
            originalPrice: 22.00,
            rating: 4.4,
            description: "Versatile sesame seeds, great for cooking and garnishing.",
            weight: "1Kg"
        },
        {
            id: 18,
            categoryId: 3,
            image: Almonds,
            title: "Hemp Seeds",
            subtitle: "Premium seeds collection",
            price: 32.00,
            originalPrice: 38.00,
            rating: 4.9,
            description: "Nutrient-dense hemp seeds, rich in protein and omega-3.",
            weight: "1Kg"
        },

        // SPICES CATEGORY
        {
            id: 19,
            categoryId: 4,
            image: Almonds,
            title: "Black Pepper",
            subtitle: "Premium spices collection",
            price: 15.00,
            originalPrice: 18.00,
            rating: 4.7,
            description: "Freshly ground black pepper, essential for every kitchen.",
            weight: "1Kg"
        },
        {
            id: 20,
            categoryId: 4,
            image: Almonds,
            title: "Cinnamon Sticks",
            subtitle: "Premium spices collection",
            price: 22.00,
            originalPrice: 25.00,
            rating: 4.8,
            description: "Aromatic cinnamon sticks, perfect for beverages and cooking.",
            weight: "1Kg"
        },
        {
            id: 21,
            categoryId: 4,
            image: Almonds,
            title: "Turmeric Powder",
            subtitle: "Premium spices collection",
            price: 18.00,
            originalPrice: 22.00,
            rating: 4.6,
            description: "Anti-inflammatory turmeric powder, essential for curries.",
            weight: "2Kg"
        },
        {
            id: 22,
            categoryId: 4,
            image: Almonds,
            title: "Cardamom Pods",
            subtitle: "Premium spices collection",
            price: 25.00,
            originalPrice: 30.00,
            rating: 4.9,
            description: "Aromatic cardamom pods, perfect for sweet and savory dishes.",
            weight: "1Kg"
        },
        {
            id: 23,
            categoryId: 4,
            image: Almonds,
            title: "Cumin Seeds",
            subtitle: "Premium spices collection",
            price: 16.00,
            originalPrice: 20.00,
            rating: 4.5,
            description: "Aromatic cumin seeds, essential for Indian and Mexican cuisine.",
            weight: "1Kg"
        },
        {
            id: 24,
            categoryId: 4,
            image: Almonds,
            title: "Paprika Powder",
            subtitle: "Premium spices collection",
            price: 14.00,
            originalPrice: 17.00,
            rating: 4.4,
            description: "Smoky and sweet paprika powder, perfect for seasoning.",
            weight: "2Kg"
        },

        // GRAINS CATEGORY
        {
            id: 25,
            categoryId: 5,
            image: Almonds,
            title: "Quinoa",
            subtitle: "Premium grains collection",
            price: 28.00,
            originalPrice: 32.00,
            rating: 4.8,
            description: "Protein-rich quinoa, a versatile grain for any meal.",
            weight: "500g"
        },
        {
            id: 26,
            categoryId: 5,
            image: Almonds,
            title: "Brown Rice",
            subtitle: "Premium grains collection",
            price: 22.00,
            originalPrice: 25.00,
            rating: 4.6,
            description: "Nutritious brown rice, a healthy alternative to white rice.",
            weight: "1kg"
        },
        {
            id: 27,
            categoryId: 5,
            image: Almonds,
            title: "Oats",
            subtitle: "Premium grains collection",
            price: 18.00,
            originalPrice: 22.00,
            rating: 4.7,
            description: "Heart-healthy oats, perfect for breakfast and baking.",
            weight: "500g"
        },
        {
            id: 28,
            categoryId: 5,
            image: Almonds,
            title: "Barley",
            subtitle: "Premium grains collection",
            price: 20.00,
            originalPrice: 24.00,
            rating: 4.5,
            description: "Nutritious barley, great for soups and salads.",
            weight: "500g"
        },
        {
            id: 29,
            categoryId: 5,
            image: Almonds,
            title: "Buckwheat",
            subtitle: "Premium grains collection",
            price: 24.00,
            originalPrice: 28.00,
            rating: 4.8,
            description: "Gluten-free buckwheat, perfect for porridge and pancakes.",
            weight: "500g"
        },
        {
            id: 30,
            categoryId: 5,
            image: Almonds,
            title: "Millet",
            subtitle: "Premium grains collection",
            price: 19.00,
            originalPrice: 23.00,
            rating: 4.6,
            description: "Nutritious millet, a versatile grain for various dishes.",
            weight: "500g"
        }
    ];

    // Get unique weights from dummyProducts and standardize the casing
    const availableWeights = [...new Set(dummyProducts.map(product => {
        // Standardize weight format
        const weight = product.weight.toLowerCase();
        if (weight === "1kg") return "1Kg";
        if (weight === "2kg") return "2Kg";
        return weight;
    }))].sort((a, b) => {
        // Sort weights in ascending order
        const getValue = (w) => {
            const num = parseFloat(w);
            if (w.includes('kg')) return num * 1000;
            return num;
        };
        return getValue(a) - getValue(b);
    });

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`z_star ${index < rating ? 'z_star-filled' : ''}`}
            />
        ));
    };

    const calculateDiscount = (originalPrice, price) => {
        return Math.round(((originalPrice - price) / originalPrice) * 100);
    };

    const FilterContent = () => (
        <div className="Z_filter_sidebar">
            <h4 className="Z_filter_title">Categories</h4>
            <Form.Group className="mb-4">
                {categories.map((category) => (
                    <Form.Check
                        key={category.id}
                        type="checkbox"
                        label={category.name}
                        className="mb-2"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCategoryChange(category.id)}
                    />
                ))}
            </Form.Group>

            <h4 className="Z_filter_title">Weight</h4>
            <Form.Group className="mb-4">
                {availableWeights.map((weight) => (
                    <Form.Check
                        key={weight}
                        type="checkbox"
                        label={weight}
                        className="mb-2"
                        checked={selectedWeights.includes(weight)}
                        onChange={() => handleWeightChange(weight)}
                    />
                ))}
            </Form.Group>

            <h4 className="Z_filter_title">Price Range</h4>
            <Form.Group className="mb-4">
                <Form.Range
                    min={0}
                    max={100}
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                />
                <div className="Z_price_range">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </Form.Group>

            <h4 className="Z_filter_title">Discount</h4>
            <Form.Group className="mb-4">
                <Form.Range
                    min={0}
                    max={100}
                    value={discountRange[1]}
                    onChange={handleDiscountChange}
                />
                <div className="Z_price_range">
                    <span>{discountRange[0]}%</span>
                    <span>{discountRange[1]}%</span>
                </div>
            </Form.Group>
        </div>
    );

    return (
        <>
            {/* Shop Content Section */}
            <section className="Z_shop_section py-5">
                <div className='a_header_container'>
                    <Row>
                        {/* Product Grid */}
                        <Col lg={9}>
                            <Row>
                                {/* Banner Section */}
                                <section className="Z_banner">
                                    <Container>
                                        <Row className="justify-content-end">
                                            <Col md={6} className="d-flex align-items-center">
                                                <div className="Z_banner_content text-end">
                                                    <h2>Premium Grocery Store</h2>
                                                    <p>Discover our selection of high-quality nuts, dried fruits, seeds, spices, and grains</p>
                                                    <button className="order-now-btn">
                                                        Order Now
                                                        <span>
                                                            <FaChevronRight />
                                                        </span>
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </section>

                                {/* Sort Section */}
                                <div className="Z_resp d-flex align-items-center mb-4">
                                    <div className="z_filter_sort_container d-flex align-items-center gap-3">
                                        <Button
                                            variant="outline-dark"
                                            onClick={handleFilterShow}
                                            className="d-lg-none"
                                        >
                                            <FaFilter className="me-2" />
                                            Filters
                                        </Button>
                                        <div className="z_sort_wrapper d-flex align-items-center">
                                            <span className="z_sort_label text-muted  me-2">Sort by:</span>
                                            <Form.Select
                                                value={z_sortBy}
                                                onChange={(e) => handleSortChange(e.target.value)}
                                                className="z_sort_select"
                                                style={{ minWidth: '150px' }}
                                            >
                                                <option value="popular">Popular</option>
                                                <option value="recent">Most Recent</option>
                                                <option value="price-high">Price - High</option>
                                                <option value="price-low">Price - Low</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>

                                {/* Cards */}
                                {currentProducts.map((product, index) => (
                                    <div key={index} className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4 mx-auto justify-content-center d-flex">
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
                                                <Badge
                                                    bg="danger"
                                                    className="z_discount-badge"
                                                >
                                                    -{calculateDiscount(product.originalPrice, product.price)}%
                                                </Badge>
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
                                                <div className="Z_weight-variants-container">
                                                    {weightVariants.map((weight) => (
                                                        <button
                                                            key={weight}
                                                            className={`Z_weight-option ${selectedWeightVariant[product.id] === weight ? 'selected' : ''}`}
                                                            onClick={(e) => {
                                                                handleWeightVariantSelect(product.id, weight);
                                                                // Add ripple effect
                                                                const button = e.currentTarget;
                                                                const ripple = document.createElement('span');
                                                                const rect = button.getBoundingClientRect();
                                                                const size = Math.max(rect.width, rect.height);
                                                                const x = e.clientX - rect.left - size / 2;
                                                                const y = e.clientY - rect.top - size / 2;

                                                                ripple.style.width = ripple.style.height = `${size}px`;
                                                                ripple.style.left = `${x}px`;
                                                                ripple.style.top = `${y}px`;
                                                                ripple.classList.add('ripple');

                                                                button.appendChild(ripple);

                                                                setTimeout(() => {
                                                                    ripple.remove();
                                                                }, 600);
                                                            }}
                                                        >
                                                            <span className="Z_weight-text">{weight}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="z_price-container">
                                                    <span className="z_current-price">${product.price.toFixed(2)}</span>
                                                    <span className="z_original-price">${product.originalPrice.toFixed(2)}</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </Row>

                            {/* Pagination */}
                            <div className="d-flex justify-content-center mt-5">
                                <Pagination className="custom-pagination">
                                    <Pagination.Item
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        &lt;
                                    </Pagination.Item>

                                    {[...Array(totalPages)].map((_, index) => {
                                        const pageNum = index + 1;
                                        return (
                                            <Pagination.Item
                                                key={pageNum}
                                                active={currentPage === pageNum}
                                                onClick={() => handlePageChange(pageNum)}
                                            >
                                                {pageNum}
                                            </Pagination.Item>
                                        );
                                    })}

                                    <Pagination.Item
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        &gt;
                                    </Pagination.Item>
                                </Pagination>
                            </div>
                        </Col>

                        {/* Desktop Filter Sidebar - Visible on lg and up */}
                        <Col lg={3} className="d-none d-lg-block">
                            <FilterContent />
                        </Col>
                    </Row>
                </div>
            </section>

            {/* Mobile/Tablet Filter Offcanvas - Visible below lg */}
            <Offcanvas
                show={showFilter}
                onHide={handleFilterClose}
                placement="start"
                className="Z_filter_offcanvas d-lg-none"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter Products</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <FilterContent />
                </Offcanvas.Body>
            </Offcanvas>

            {/* Product Quick View Modal */}
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
                                        <span className="z_modal-discount-badge">
                                            -{calculateDiscount(selectedProduct.originalPrice, selectedProduct.price)}%
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="z_modal-content">
                                        <h3 className="mb-3">{selectedProduct.title}</h3>

                                        <div className="z_rating-container mb-4">
                                            {renderStars(selectedProduct.rating)}
                                            <span className="z_rating-text ms-2">({selectedProduct.rating} customer review)</span>
                                        </div>

                                        <div className="Z_weight-variants-container">
                                            {weightVariants.map((weight) => (
                                                <button
                                                    key={weight}
                                                    className={`Z_weight-option ${selectedWeightVariant[selectedProduct.id] === weight ? 'selected' : ''}`}
                                                    onClick={(e) => {
                                                        handleWeightVariantSelect(selectedProduct.id, weight);
                                                        // Add ripple effect
                                                        const button = e.currentTarget;
                                                        const ripple = document.createElement('span');
                                                        const rect = button.getBoundingClientRect();
                                                        const size = Math.max(rect.width, rect.height);
                                                        const x = e.clientX - rect.left - size / 2;
                                                        const y = e.clientY - rect.top - size / 2;

                                                        ripple.style.width = ripple.style.height = `${size}px`;
                                                        ripple.style.left = `${x}px`;
                                                        ripple.style.top = `${y}px`;
                                                        ripple.classList.add('ripple');

                                                        button.appendChild(ripple);

                                                        setTimeout(() => {
                                                            ripple.remove();
                                                        }, 600);
                                                    }}
                                                >
                                                    <span className="Z_weight-text">{weight}</span>
                                                </button>
                                            ))}
                                        </div>

                                        <div className="mb-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="h3 mb-0">${selectedProduct.price.toFixed(2)}</span>
                                                <span className="text-decoration-line-through text-muted">
                                                    ${selectedProduct.originalPrice.toFixed(2)}
                                                </span>
                                                <Badge bg="info" className="ms-2">
                                                    {selectedWeightVariant[selectedProduct.id] || selectedProduct.weight}
                                                </Badge>
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
                                                <span className="z_modal-details-value">
                                                    {categories.find(cat => cat.id === selectedProduct.categoryId)?.name || 'Unknown'}
                                                </span>
                                            </div>
                                            <div className="z_modal-details-item">
                                                <span className="z_modal-details-label">Weight:</span>
                                                <span className="z_modal-details-value">{selectedProduct.weight}</span>
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

export default Shop;