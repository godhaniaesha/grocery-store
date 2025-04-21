import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaHeart, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs';

export default function SearchHeader() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  return (
    <>
      <header className="bg-success text-white sticky-top shadow-sm">
        <div className="container-sm">
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
                <FaBars className="fs-5 text-white" />
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
                <div className="input-group rounded-pill overflow-hidden" style={{ maxWidth: '600px', width: '100%' }}>
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
                  <button className="btn btn-light d-flex align-items-center justify-content-center px-sm-3 px-1" type="button">
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
                      style={{ '--bs-bg-opacity': '0.5' }}
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
                      style={{ '--bs-bg-opacity': '0.5' }}
                    >
                      0
                    </span>
                  </button>
                </div>

                <div className="text-center d-md-none d-block position-relative">
                  <button className="btn bg-transparent p-0 border-0 d-flex justify-content-center w-100 text-white" onClick={toggleMobileSearch}>

                    {showMobileSearch ? <FaTimes size={18} /> : <FaSearch size={18} />}
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
                  <button className="btn btn-light d-flex align-items-center justify-content-center px-3" type="button">
                    <FaSearch />
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Mobile Search */}

        </div>
      </header>

      <style jsx>{`
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
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
