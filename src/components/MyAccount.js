import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { getUserById } from '../redux/slices/Auth.slice';
import '../styles/MyAccount.css';

const MyAccount = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth);
    console.log(userData, "userData");
    
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
    });

    useEffect(() => {
        dispatch(getUserById());
    }, [dispatch]);

    useEffect(() => {
        if (userData && userData.userData) {
            const user = userData.userData;
            setUserInfo({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
                phone: user.phone || '',
                city: user.city || '',
                state: user.state || '',
                postcode: user.postcode || '',
                country: user.country || '',
                role: user.role || '',
                createdAt: new Date(user.createdAt).toLocaleDateString(),
                updatedAt: new Date(user.updatedAt).toLocaleDateString(),
                avatar: require("../image/user.jpg")
            });
        }
    }, [userData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="account-container">
            <div className="account-header">
                <h1>My Account</h1>
            </div>
            
            <div className="account-content">
                <div className="account-sidebar">
                    <div className="avatar-wrapper">
                        <img src={userInfo.avatar} alt="Profile" className="avatar-img" />
                        <button className="change-photo-btn">Change Photo</button>
                    </div>
                    <div className="quote-section mt-2">
                     
                        <p className="quote-text small">
                            "Your one-stop destination for fresh groceries, quality products, and exceptional service. Shop smart, live better! 🛒✨"
                        </p>
                    </div>
                </div>

                <div className="account-main">
                    <div className="info-header">
                        <h2>Personal Information</h2>
                        {!isEditing && (
                            <button onClick={() => setIsEditing(true)} className="edit-btn">
                                <FaEdit />
                            </button>
                        )}
                    </div>
                    
                    {!isEditing ? (
                        <div className="info-display">
                            <div className="info-row">
                                <div className="info-field">
                                    <label>First Name</label>
                                    <p>{userInfo.firstName}</p>
                                </div>
                                <div className="info-field">
                                    <label>Last Name</label>
                                    <p>{userInfo.lastName}</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-field">
                                    <label>Email</label>
                                    <p>{userInfo.email}</p>
                                </div>
                                <div className="info-field">
                                    <label>Phone</label>
                                    <p>{userInfo.phone}</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-field">
                                    <label>City</label>
                                    <p>{userInfo.city}</p>
                                </div>
                                <div className="info-field">
                                    <label>State</label>
                                    <p>{userInfo.state}</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-field">
                                    <label>Postal Code</label>
                                    <p>{userInfo.postcode}</p>
                                </div>
                                <div className="info-field">
                                    <label>Country</label>
                                    <p>{userInfo.country}</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-field">
                                    <label>Role</label>
                                    <p>{userInfo.role}</p>
                                </div>
                                <div className="info-field">
                                    <label>Member Since</label>
                                    <p>{userInfo.createdAt}</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-field">
                                    <label>Last Updated</label>
                                    <p>{userInfo.updatedAt}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="edit-form">
                            <div className="form-row">
                                <div className="form-field">
                                    <label>First Name</label>
                                    <input 
                                        type="text"
                                        value={userInfo.firstName}
                                        onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Last Name</label>
                                    <input 
                                        type="text"
                                        value={userInfo.lastName}
                                        onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-field">
                                    <label>Phone Number</label>
                                    <input 
                                        type="tel"
                                        value={userInfo.phone}
                                        onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Email Address</label>
                                    <input 
                                        type="email"
                                        value={userInfo.email}
                                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-field">
                                    <label>City</label>
                                    <input 
                                        type="text"
                                        value={userInfo.city}
                                        onChange={(e) => setUserInfo({...userInfo, city: e.target.value})}
                                    />
                                </div>
                                <div className="form-field">
                                    <label>State</label>
                                    <input 
                                        type="text"
                                        value={userInfo.state}
                                        onChange={(e) => setUserInfo({...userInfo, state: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-field">
                                    <label>Postal Code</label>
                                    <input 
                                        type="text"
                                        value={userInfo.postcode}
                                        onChange={(e) => setUserInfo({...userInfo, postcode: e.target.value})}
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Country</label>
                                    <input 
                                        type="text"
                                        value={userInfo.country}
                                        onChange={(e) => setUserInfo({...userInfo, country: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="button-group">
                                <button type="submit" className="save-btn">Save</button>
                                <button 
                                    type="button" 
                                    className="cancel-btn"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyAccount;