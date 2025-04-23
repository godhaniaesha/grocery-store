import React, { useState, useRef , useEffect } from "react";
import { FaSearch, FaShoppingCart, FaHeart, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs';
import Menuheader from '../components/Menuheader';

import '../styles/x_app.css'
import { GrFormClose } from 'react-icons/gr';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

export default function SearchHeader() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };
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
      <header className="sticky-top shadow-sm" style={{"backgroundColor":"#2c6145"}}>
        <div className="container-sm text-white">
          <nav className="navbar navbar-expand-lg navbar-dark py-2 d-flex justify-content-between align-items-center">
            {/* ==== LEFT: LOGO & MENU ==== */}
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler p-1 me-sm-3 me-1 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <button className="x_menu_btn text-white" onClick={() => setOpen(true)}>
                  <HiMenuAlt2 size={24} />
                </button>
              </button>

              <a className="navbar-brand d-flex align-items-center" href="/">
                <BsShop className="me-2" size={28} />
                <span className="fw-bold fs-4">FreshMart</span>
              </a>
            </div>

            {/* ==== RIGHT SIDE: SEARCH + ICONS ==== */}
            <div className="d-flex align-items-center justify-content-end flex-grow-1">
              {/* Desktop Search */}
              <div className="d-none d-md-flex mx-sm-3 mx-1 flex-grow-1 justify-content-center">
                <div
                  className="input-group rounded-pill overflow-hidden"
                  style={{ maxWidth: "600px", width: "100%" }}
                >
                  {/* <input
                    type="text"
                    className="form-control border-0 py-2 px-sm-3 px-1"
                    placeholder="Search for groceries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  /> */}
                  <input
                    type="text"
                    className="form-control border-0 py-2 px-sm-3 px-1 custom-input"
                    placeholder="Search for groceries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    className="btn btn-light d-flex align-items-center justify-content-center px-sm-3 px-1"
                    type="button"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* Icons Section */}
              <div className="db_icon_wrapper d-flex align-items-center gap-sm-4 gap-2 ms-sm-3 ms-1">
                {/* Account */}
                <div className="text-center">
                  <button className="btn bg-transparent p-0 border-0 d-flex justify-content-center w-100">
                    <FaUser size={22} className="text-white" />
                  </button>
                </div>

                {/* Wishlist */}
                <div className="text-center position-relative">
                  <button className="btn bg-transparent p-0 border-0 d-flex justify-content-center w-100 position-relative">
                    <FaHeart size={22} className="text-white" />
                    <span
                      className="badge bg-dark text-white position-absolute top-0 start-100 translate-middle rounded-circle"
                      style={{ "--bs-bg-opacity": "0.5" }}
                    >
                      3
                    </span>
                  </button>
                </div>

                {/* Cart */}
                <div className="text-center position-relative">
                  <button className="btn bg-transparent p-0 border-0 d-flex justify-content-center w-100 position-relative">
                    <FaShoppingCart size={22} className="text-white" />
                    <span
                      className="badge bg-dark text-white position-absolute top-0 start-100 translate-middle rounded-circle"
                      style={{ "--bs-bg-opacity": "0.5" }}
                    >
                      0
                    </span>
                  </button>
                </div>

                <div className="text-center d-md-none d-block position-relative">
                  <button
                    className="btn bg-transparent p-0 border-0 d-flex justify-content-center w-100 text-white"
                    onClick={toggleMobileSearch}
                  >
                    {showMobileSearch ? (
                      <FaTimes size={18} />
                    ) : (
                      <FaSearch size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            {showMobileSearch && (
              <div className="d-md-none my-2 mb-2 animate-slide-down w-100">
                <div className="input-group rounded-pill overflow-hidden">
                  <input
                    type="text"
                    className="form-control border-0 py-2 px-3"
                    placeholder="Search for groceries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    className="btn btn-light d-flex align-items-center justify-content-center px-3"
                    type="button"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Mobile Search */}
        </div>
        <nav className="x_navbar d-md-block d-none">
          <div className="x_nav_container" ref={dropdownRef}>
            <div className="x_sticky_category">
              <div
                className={`x_nav_item ${
                  active === "All Categories" ? "x_active" : ""
                }`}
                onClick={() => handleItemClick("All Categories")}
              >
                All Categories
              </div>
            </div>
            <ul className="x_nav_list">
              {categories.map((item) => (
                <li
                  key={item}
                  className={`x_nav_item ${active === item ? "x_active" : ""}`}
                  data-category={item}
                  onClick={() => handleItemClick(item)}
                >
                  <div className="x_nav_item_content">
                    {item}
                    <IoIosArrowDown
                      className={`x_arrow ${
                        active === item ? "x_arrow_up" : ""
                      }`}
                    />
                  </div>
                  {active === item && renderDropdown(item)}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className={`x_offcanvas ${open ? "x_open" : ""}`}>
          <button className="x_close_btn" onClick={() => setOpen(false)}>
            <GrFormClose className="x_active" size={24} />
          </button>
          <div className="x_offcanvas_content">
            <ul className="x_mobile_menu">
              <li
                className={`x_mobile_item ${
                  active === "All Categories" ? "x_active" : ""
                }`}
                onClick={() => handleItemClick("All Categories")}
              >
                All Categories
              </li>
              {categories.map((category) => (
                // Update the mobile menu click handler
                <li
                  key={category}
                  className={`x_mobile_item ${
                    active === category ? "x_active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleItemClick(category);
                  }}
                >
                  <div className="x_mobile_item_header">
                    {category}
                    <IoIosArrowDown
                      className={`x_arrow ${
                        active === category ? "x_arrow_up" : ""
                      }`}
                    />
                  </div>
                  {showDropdown === category && ( // Changed this condition
                    <div className="x_mobile_submenu">
                      {Object.entries(menuData[category]).map(
                        ([title, items]) => (
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
                        )
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <style jsx>{`
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .db_icon_wrapper .badge {
          font-size: 0.65rem;
          padding: 4px 6px;
          min-width: 20px;
          min-height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .db_icon_wrapper button:hover {
          transform: scale(1.1);
        }
        .db_icon_wrapper button {
          transition: transform 0.2s ease;
        }

        /* SHRINK ICONS BELOW 425px */
        @media (max-width: 425px) {
          .db_icon_wrapper svg {
            width: 16px !important;
            height: 16px !important;
          }
          /* if you need the badges slightly smaller too: */
          .db_icon_wrapper .badge {
            font-size: 0.55rem;
            padding: 2px 4px;
            min-width: 16px;
            min-height: 16px;
          }
        }
        input:focus {
          box-shadow: none !important;
          outline: none;
        }

        .custom-input:focus {
          box-shadow: none !important;
          outline: none;
        }
      `}</style>
    </>
  );
}
