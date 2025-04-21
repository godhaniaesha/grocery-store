import React, { useState, useEffect, useRef } from 'react';
import '../styles/x_app.css'
import { GrFormClose } from 'react-icons/gr';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

function Menuheader(props) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("All Categories");
    const [showDropdown, setShowDropdown] = useState(null);
   
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActive("All Categories");
                setShowDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuData = {
        "Grains & Pulses": {
            "Whole Pulses": [
                "Moong Whole",
                "Chana Whole",
                "Urad Whole",
                "Masoor Whole",
                "Rajma",
                "Kabuli Chana"
            ],
            "Split Pulses": [
                "Moong Dal",
                "Chana Dal",
                "Toor Dal (Arhar)",
                "Urad Dal",
                "Masoor Dal"
            ],
            "Organic Pulses": [
                "Organic Moong Dal",
                "Organic Chana Dal",
                "Organic Toor Dal",
                "Organic Masoor Dal"
            ],
            "Other Pulses": [
                "Horse Gram",
                "Lobia (Black Eyed Beans)",
                "Soybean",
                "Green Peas",
                "Black Chickpeas"
            ],
            "Grains": [
                "Wheat",
                "Rice",
                "Jowar",
                "Bajra",
                "Ragi",
                "Barley"
            ],
            "Organic Grains": [
                "Organic Wheat",
                "Organic Rice",
                "Organic Bajra",
                "Organic Jowar"
            ],
            "Ready to Cook Pulses": [
                "Sprouted Pulses Mix",
                "Soaked & Packed Pulses"
            ]
        },
        "Oil & Ghee": {
            "Ghee": [
                "Cow Ghee",
                "Desi Ghee"
            ],
            "Oil": [
                "Sunflower Oil",
                "Coconut Oil",
                "Groundnut Oil",
                "Soyabean Oil",
                "Rice Bran Oil",
                "Mustard Oil",
                "Olive Oil",
                "Canola Oil",
                "Blended Oil",
                "Sesame Oil",
                "Corn Oil"
            ],
            "Vanaspati & Dalda": [
                "Vanaspati",
                "Dalda"
            ],
            "Butter & Cream": [
                "White Butter",
                "Table Butter",
                "Fresh Cream"
            ],
            "Organic Oils": [
                "Organic Coconut Oil",
                "Organic Mustard Oil"
            ],
            "Cooking Sprays": [
                "Olive Oil Spray",
                "Butter Spray"
            ]
        },
        "Spices & Masala": {
            "Whole Spices": [
                "Cumin",
                "Coriander",
                "Cardamom",
                "Cloves",
                "Cinnamon",
                "Bay Leaves",
                "Black Pepper"
            ],
            "Powder Spices": [
                "Turmeric Powder",
                "Red Chilli Powder",
                "Coriander Powder",
                "Cumin Powder",
                "Garam Masala"
            ],
            "Blended Spices": [
                "Kitchen King Masala",
                "Sabzi Masala",
                "Pav Bhaji Masala",
                "Chhole Masala",
                "Biryani Masala",
                "Tea Masala"
            ],
            "Hing": [
                "Compounded Hing",
                "Raw Hing"
            ],
            "Cooking Pastes": [
                "Ginger Garlic Paste",
                "Garlic Paste",
                "Ginger Paste"
            ],
            "Herbs & Seasonings": [
                "Oregano",
                "Chili Flakes",
                "Mixed Herbs",
                "Curry Leaves",
                "Kasuri Methi"
            ],
            "Food Colour & Flavours": [
                "Food Colour",
                "Kesar",
                "Essences",
                "Flavoring Agents"
            ]
        },
        "Dairy & Bakery": {
            "Dairy": [
                "Milk",
                "Curd",
                "Paneer",
                "Butter",
                "Cheese",
                "Flavoured Milk",
                "Cream",
                "Buttermilk & Lassi",
                "Condensed, Powdered Milk"
            ],
            "Bakery": [
                "Bread",
                "Buns & Pav",
                "Pizza Base & Kulcha",
                "Cake",
                "Pastries",
                "Brownie",
                "Donuts"
            ],
            "Cookies & Rusk": [
                "Cookies",
                "Cream Biscuits",
                "Glucose & Marie",
                "Health Biscuits",
                "Rusk"
            ],
            "Bakery Snacks": [
                "Khari & Toast",
                "Bakery Namkeen",
                "Puffs & Rolls"
            ],
            "Frozen Desserts": [
                "Ice Cream",
                "Kulfi",
                "Frozen Yogurt"
            ]
        },
        "Fruits & Vegetables": {
            "Fresh Vegetables": [
                "Potato",
                "Onion",
                "Tomato",
                "Green Chilli",
                "Carrot",
                "Beetroot",
                "Cucumber",
                "Lady Finger",
                "Brinjal",
                "Bitter Gourd",
                "Bottle Gourd",
                "Cabbage",
                "Cauliflower",
                "Spinach",
                "Coriander Leaves",
                "Drumstick"
            ],
            "Fresh Fruits": [
                "Banana",
                "Apple",
                "Papaya",
                "Orange",
                "Mosambi",
                "Guava",
                "Grapes",
                "Pomegranate",
                "Watermelon",
                "Mango",
                "Chikoo",
                "Pear",
                "Kiwi",
                "Pineapple"
            ],
            "Exotic Vegetables": [
                "Broccoli",
                "Zucchini",
                "Lettuce",
                "Bell Peppers",
                "Avocado",
                "Asparagus",
                "Celery"
            ],
            "Organic Vegetables": [
                "Organic Tomato",
                "Organic Carrot",
                "Organic Potato",
                "Organic Greens"
            ],
            "Organic Fruits": [
                "Organic Banana",
                "Organic Apple",
                "Organic Papaya"
            ],
            "Cut & Peeled": [
                "Cut Fruits",
                "Cut Vegetables",
                "Vegetable Mixes"
            ],
            "Herbs & Leaves": [
                "Coriander",
                "Mint",
                "Curry Leaves",
                "Lemongrass",
                "Tulsi"
            ],
            "Sprouts & Microgreens": [
                "Moong Sprouts",
                "Mixed Sprouts",
                "Microgreens"
            ]
        },
        "Beverages": {
            "Tea & Coffee": [
                "Green Tea",
                "Black Tea",
                "Herbal Tea",
                "Tea Bags",
                "Instant Coffee",
                "Ground Coffee",
                "Coffee Beans"
            ],
            "Fruit Juices": [
                "Orange Juice",
                "Apple Juice",
                "Mixed Fruit Juice",
                "Mango Juice"
            ],
            "Soft Drinks": [
                "Cola",
                "Lemon Drink",
                "Soda",
                "Tonic Water"
            ],
            "Energy & Sports Drinks": [
                "Energy Drinks",
                "Electrolyte Drinks"
            ],
            "Health Drinks & Supplements": [
                "Protein Powders",
                "Nutritional Supplements",
                "Kids Health Drinks"
            ],
            "Syrups & Concentrates": [
                "Rose Syrup",
                "Lemon Syrup",
                "Squash & Fruit Concentrates"
            ],
            "Flavoured & Packaged Water": [
                "Flavoured Water",
                "Mineral Water",
                "Sparkling Water"
            ],
            "Milk Based Drinks": [
                "Flavoured Milk",
                "Soy Milk",
                "Almond Milk"
            ],
            "Cold Pressed Juices": [
                "Cold Pressed Apple Juice",
                "Cold Pressed Mixed Fruit Juice"
            ]
        },
        "Snacks & Packaged Foods": {
            "Chips & Namkeen": [
                "Potato Chips",
                "Banana Chips",
                "Corn Chips",
                "Masala Snacks",
                "Namkeen Mix"
            ],
            "Biscuits & Cookies": [
                "Cream Biscuits",
                "Crunchy Biscuits",
                "Cookies",
                "Gluten-Free Biscuits"
            ],
            "Ready to Eat": [
                "Instant Noodles",
                "Curry & Rice",
                "Porridge & Oats",
                "Pasta"
            ],
            "Sweets & Chocolates": [
                "Candies",
                "Lollipops",
                "Milk Sweets",
                "Chocolate Bars"
            ],
            "Dry Fruits & Nuts": [
                "Almonds",
                "Cashews",
                "Raisins",
                "Pistachios",
                "Walnuts"
            ],
            "Frozen Foods": [
                "Frozen Vegetables",
                "Frozen Parathas",
                "Frozen Snacks"
            ],
            "Fruit Juices & Drinks": [
                "Fruit Juices",
                "Soft Drinks",
                "Fruit Pulps"
            ],
            "Tea & Coffee": [
                "Tea",
                "Green Tea",
                "Instant Coffee",
                "Ground Coffee"
            ],
            "Pickles & Sauces": [
                "Mango Pickle",
                "Mixed Pickles",
                "Chili Sauce",
                "Tomato Ketchup"
            ],
            "Health Snacks": [
                "Granola Bars",
                "Protein Bars",
                "Seed Mixes",
                "Dry Fruits"
            ]
        },
    };

    const categories = Object.keys(menuData);

    // Replace single count with an object to track counts for each item
    const [itemCounts, setItemCounts] = useState({});

    const handleItemClick = (item) => {
        if (item === "All Categories") {
            setActive("All Categories");
            setShowDropdown(null);
            return;
        }

        // Get current count for this item (default to 1 if not set)
        const currentCount = itemCounts[item] || 1;

        if (currentCount % 2 === 0) {
            // Even count - close dropdown
            setActive("All Categories");
            setShowDropdown(null);
            setItemCounts(prev => ({
                ...prev,
                [item]: currentCount - 1
            }));
        } else {
            // Odd count - open dropdown
            setActive(item);
            setShowDropdown(item);
            setItemCounts(prev => ({
                ...prev,
                [item]: currentCount + 1
            }));
        }
    };



    const renderDropdown = (category) => {
        if (!menuData[category]) return null;

        return (
            <div className="x_mega_dropdown">
                {Object.entries(menuData[category]).map(([title, items]) => (
                    <div key={title} className="x_dropdown_section">
                        <h3 className="x_dropdown_title">{title}</h3>
                        <ul className="x_dropdown_list">
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className="x_dropdown_item"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActive("All Categories");
                                        setShowDropdown(null);
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <nav className="x_navbar">
                <div className="x_nav_container" ref={dropdownRef}>
                    <div className="x_sticky_category">
                        <div className={`x_nav_item ${active === "All Categories" ? "x_active" : ""}`}
                            onClick={() => handleItemClick("All Categories")}>
                            All Categories
                        </div>
                    </div>
                    <ul className="x_nav_list">
                        {categories.map((item) => (
                            <li key={item}
                                className={`x_nav_item ${active === item ? "x_active" : ""}`}
                                data-category={item}
                                onClick={() => handleItemClick(item)}
                            >
                                <div className="x_nav_item_content">
                                    {item}
                                    <IoIosArrowDown className={`x_arrow ${(active === item) ? 'x_arrow_up' : ''}`} />
                                </div>
                                {active === item && renderDropdown(item)}
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="x_menu_btn" onClick={() => setOpen(true)}>
                    <HiMenuAlt2 size={24} />
                </button>
            </nav>

            <div className={`x_offcanvas ${open ? "x_open" : ""}`}>
                <button className="x_close_btn" onClick={() => setOpen(false)}>
                    <GrFormClose className='x_active' size={24} />
                </button>
                <div className="x_offcanvas_content">
                    <ul className="x_mobile_menu">
                        <li 
                            className={`x_mobile_item ${active === "All Categories" ? "x_active" : ""}`}
                            onClick={() => handleItemClick("All Categories")}
                        >
                            All Categories
                        </li>
                        {categories.map((category) => (
                            // Update the mobile menu click handler
                            <li 
                                key={category}
                                className={`x_mobile_item ${active === category ? "x_active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleItemClick(category);
                                }}
                            >
                                <div className="x_mobile_item_header">
                                    {category}
                                    <IoIosArrowDown className={`x_arrow ${active === category ? "x_arrow_up" : ""}`} />
                                </div>
                                {showDropdown === category && (  // Changed this condition
                                    <div className="x_mobile_submenu">
                                        {Object.entries(menuData[category]).map(([title, items]) => (
                                            <div key={title} className="x_mobile_section">
                                                <h3 className="x_mobile_title">{title}</h3>
                                                <ul className="x_mobile_list">
                                                    {items.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            className="x_mobile_subitem"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActive("All Categories");
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Menuheader;