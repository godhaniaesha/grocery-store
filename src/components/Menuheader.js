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
        "Foodgrain, Oil & Masala": {
            "Whole Pulses": ["Minor Dals"],
            "Masala": [
                "Whole Spices",
                "Powder Spices",
                "Blended Spices",
                "Hing",
                "Cooking Pastes",
                "Herbs & Seasonings",
                "Food Colour & Flavours"
            ],
            "Ghee": [
                "Cow Ghee",
                "Desi Ghee"
            ],
            "Oil": [
                "Coconut Oil",
                "Sunflower Oil",
                "Ghee",
                "Coconut Oil",
                "Sunflower Oil",
                "Ghee"
            ],
           "Sugar": [
                "Crystal Sugar",
                "Brown & Value Added Sugar"
            ],
            "Split Pulses": [
                "Arhar",
                "Moong",
                "Chana",
                "Urad"
            ],
            "Rice Products": [
                "Poha & Bhadang",
                "Saboodana"
            ],
            "Salt": [
                "Iodized Salt",
                "Rock Salt & Other Salt"
            ],
            "Atta & Other Flour": [
                "Atta",
                "Suji",
                "Besan",
                "Other Flour",
                "Maida",
                "Multigrain & Sharbati Atta",
                "Upwaas Atta"
            ],
            "Jaggery": [
                "Gud"
            ],
            "Cooking Oil": [
                "Cooking Oil"
            ],
            "Kitchen": [
                "Kitchen tools",
                "Storage Containers",
                "Cookware",
                "Water Bottles",
                "Cookers",
                "Kitchen accessories"
            ]

        },
        "Fruits & Vegetables": {
            "Fresh Vegetables": [
                "Onion, Potato & Tomato",
                "Leafy & Rooty Vegetables",
                "Cabbage, Cauliflower & Capsicum",
                "Chilly, Lemon ,Ginger & Garlic",
                "Gourds",
                "Beans, Brinjal & Bhindi",
                "Carrot & Cucumber",
                "Peas, Corn & Mushrooms",
                "Tamarind,Coconut & Jackfruits",
                "Pumpkin & Tropical Vegetables",
                "Raw Papaya , Banana & Raw Mango"
            ],
            "Fresh Fruits": [
                "Melons",
                "Grapes & Guava",
                "Exotic Fruits",
                "Mangoes & Seasonal Fruits",
                "Bananas",
                "Apple",
                "Orange & Kinnow",
                "Plums,Pears & Pomogranate",
                "Pine Apple & Papaya",
                "Sapota & Fresh Dates"
            ],
            "Cuts & Sprouts": [
                "Sprouts"
            ]
        },
        "Dairy & Bakery": {
            "Curd, Paneer & Chaas": [
                "Curd & Yougurt",
                "Paneer & Tofu",
                "Chaas & Lassi"
            ],
            "Milk, Cream & Sweets": [
                "Fino & Tetra Pack Milk",
                "Fresh Milk & Soya Milk",
                "Cream",
                "Flavoured Milk",
                "Desserts"
            ],
            "Butter & Margarine": [
                "Table Butter",
                "Margarine"
            ],
            "Cheese": [
                "Cheese Cubes",
                "Cheese Slice",
                "Cheese Spread"
            ],
            "Fresh Baked & Batter": [
                "Breads",
                "Batter",
                "Speciality Breads"
            ]
        },
        "Home Care": {
            "Cleaners": [
                "Utensil Cleaner Bar",
                "Toilet Cleaners",
                "Floor Cleaners",
                "Utensil Cleaner Gel",
                "Dusters, Scrubs And Wipes",
                "Kitchen & Glass Cleaners",
                "Brooms & Brushes"
            ],
            "Fabric Care": [
                "Bucket Wash Detergent",
                "Blue,Fabric Conditioner & Whitner",
                "Detergent Bar",
                "Top Load Detergent Liquid",
                "Front Load Detergent Liquid",
                "Top Load Detergent Powder",
                "Front Load Detergent Powder"
            ],
            "Paper Products & Disposables": [
                "Hand Tissue",
                "Disposable Dining",
                "Toilet Tissue",
                "Face Tissue"
            ],
            "Pooja Needs": [
                "Dhoop,Agarbatti & Pooja Oil",
                "Other Pooja Needs"
            ],
            "Repellents": [
                "Spray (Aerosol)",
                "Machine & Refill",
                "Creams & Other"
            ],
            "Fresheners": [
                "Solid Freshners",
                "Gel Freshners",
                "Air Fresheners Spray",
                "Car Freshners"
            ],
            "Shoe Care": [
                "Liquid Polish",
                "Wax Polish",
                "Shoe Brush & Acessories"
            ]
        },
        "Branded Food": {
            "Wafers & Namkeens": [
                "Namkeens",
                "Nuts & Other Snacks",
                "Potato Wafers & Chips",
                "Chikkis",
                "Health Snacks",
                "Gift Packs"
            ],
            "Biscuits & Cookies": [
                "Cream Biscuits",
                "Cookies",
                "Plain Biscuits",
                "Marie Biscuits",
                "Salted Biscuits",
                "Health & Wafer Biscuits",
                "Rusk",
                "Cakes"
            ],
            "Noodles & Pasta": [
                "Instant Noodles",
                "Instant Pasta",
                "Vermicelli",
                "Soups"
            ],
            "Papad & Fryums": [
                "Papad",
                "Fryums"
            ],
            "Ready To Eat": ["Sweets"],
            "Chocolates & Confectionery": [
                "Block Chocolate",
                "Toffees & Candies",
                "Chocolate Coated"
            ],
            "Sauces & Vinegar": [
                "Tomato Ketchup",
                "Vinegar",
                "Soya , Chilli Sauces",
                "Other Sauces",
                "Blended Sauces"
            ],
            "Mouth Freshners": [
                "Mukhwas",
                "Gum & Mints"
            ]
        },
        "Beverages": {
            "Tea": [
                "Strong Leaf Tea",
                "Green Tea",
                "Flavoured Tea & Tea Bags",
                "Flavoury Leaf Tea"
            ],
            "Carbonated Soft Drinks": [
                "Cola",
                "Orange & Clear",
                "Sports & Energy Drinks",
                "Lemon & Cloudy",
                "Soda & Tonic Water",
                "Non Alcoholic Beer"
            ],
            "Juices": [
                "Juices (Added Sugar)",
                "100% Juices",
                "Just Pressed Juice"
            ],
            "Concentrates": [
                "Drink Mixes & Powder Concentrates",
                "Squashes"
            ],
            "Coffee": [
                "Instant Coffee",
                "Filter Coffee"
            ],
            "Water": [
                "Mineral Water"
            ],
            "Nutritional Drinks": [
                "Brown Drink",
                "White Drink"
            ],
            "Whitener": [
                "Milk Powder"
            ]
        },
        "Frozen": {
            "Atta & Other Flour": [
                "Atta",
                "Suji",
                "Besan",
                "Other Flour",
                "Maida",
                "Multigrain & Sharbati Atta",
                "Upwaas Atta"
            ],
            "Vegetable": [
                "Frozen Green Peas",
                "Frozen Sweet Corn",
                "Veg Snacks",
                "Frozen French Fries",
                "Other Frozen Snacks",
                "Frozen Stuff & Plain Pratha",
                "Frozen Burger",
                "Frozen Nuggets"
            ]
        },
    };

    const categories = Object.keys(menuData);

    const handleItemClick = (item) => {
        if (active === item) {
            setActive("All Categories");
            setShowDropdown(null);
        } else {
            setActive(item);
            setShowDropdown(item);
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
                // Also update the mobile menu items
                <ul className="x_offcanvas_list">
                    {categories.map((item) => (
                        <li key={item} className="x_offcanvas_item">
                            <div 
                                className={`x_nav_item ${active === item ? "x_active" : ""}`}
                                data-category={item}
                                onClick={() => handleItemClick(item)}
                            >
                                <div className="x_nav_item_content">
                                    {item}
                                    <IoIosArrowDown className={`x_arrow ${showDropdown === item ? 'x_arrow_up' : ''}`} />
                                </div>
                            </div>
                            {showDropdown === item && renderDropdown(item)}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Menuheader;