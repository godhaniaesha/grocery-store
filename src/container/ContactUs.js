import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';
import Subscribe from './Subscribe';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Move validation schema outside the component
const ContactSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    message: Yup.string()
        .min(10, 'Message too short')
        .required('Message is required')
});

function ContactUs() {
    return (
        <>
            <div className="x_contact_section a_header_container">
                

                <div className="x_contact_form_section">
                    <div className="x_form_container">
                        <div className="x_why_header text-center">
                            <h5 className="x_testimonial_subtitle">Write a Message</h5>
                            <h2 className="x_testimonial_title" style={{fontWeight:"600"}}>
                                We're always here to<br />help you
                            </h2>
                        </div>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                phone: '',
                                message: ''
                            }}
                            validationSchema={ContactSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                                setTimeout(() => {
                                    setSubmitting(false);
                                    resetForm();
                                    alert('Message sent successfully!');
                                }, 500);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="x_contact_form">
                                    <div className="x_form_row">
                                        <div className="x_form_group">
                                            <Field
                                                type="text"
                                                name="firstName"
                                                placeholder="First name"
                                                className="x_form_input"
                                            />
                                            <ErrorMessage name="firstName" component="div" className="x_form_error" />
                                        </div>
                                        <div className="x_form_group">
                                            <Field
                                                type="text"
                                                name="lastName"
                                                placeholder="Last name"
                                                className="x_form_input"
                                            />
                                            <ErrorMessage name="lastName" component="div" className="x_form_error" />
                                        </div>
                                    </div>
                                    <div className="x_form_row">
                                        <div className="x_form_group">
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Email address"
                                                className="x_form_input"
                                            />
                                            <ErrorMessage name="email" component="div" className="x_form_error" />
                                        </div>
                                        <div className="x_form_group">
                                            <Field
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone"
                                                className="x_form_input"
                                            />
                                            <ErrorMessage name="phone" component="div" className="x_form_error" />
                                        </div>
                                    </div>
                                    <div className="x_form_group">
                                        <Field
                                            as="textarea"
                                            name="message"
                                            placeholder="Write message"
                                            className="x_form_textarea"
                                        />
                                        <ErrorMessage name="message" component="div" className="x_form_error" />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="x_submit_button" 
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send a message'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="x_contact_info_bar">
                    <div className="x_info_container">
                        <div className="x_info_item">
                            <FaPhoneAlt className="x_info_icon" />
                            <div className="x_info_content">
                                <span className="x_info_label">Have any question?</span>
                                <span className="x_info_value">+ 92 ( 307 ) 68 - 06860</span>
                            </div>
                        </div>
                        <div className="x_info_item">
                            <FaEnvelope className="x_info_icon" />
                            <div className="x_info_content">
                                <span className="x_info_label">Write email</span>
                                <span className="x_info_value">needhelp@company.com</span>
                            </div>
                        </div>
                        <div className="x_info_item">
                            <FaMapMarkerAlt className="x_info_icon" />
                            <div className="x_info_content">
                                <span className="x_info_label">Visit store</span>
                                <span className="x_info_value">Valentin, Street Road 24, New York</span>
                            </div>
                        </div>
                        {/* <div className="x_social_links">
                            <a href="#" className="x_social_link"><FaFacebookF /></a>
                            <a href="#" className="x_social_link"><FaTwitter /></a>
                            <a href="#" className="x_social_link"><FaPinterestP /></a>
                            <a href="#" className="x_social_link"><FaInstagram /></a>
                        </div> */}
                    </div>
                </div>
                <div className="x_map_container mb-lg-5 mb-3">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.939248817518!2d72.55442867500275!3d23.026077779157786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f521440d4b%3A0x6853ee97a9a2996b!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat%20380009!5e0!3m2!1sen!2sin!4v1709200251789!5m2!1sen!2sin"
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                
            </div>
        </>
    );
}

export default ContactUs;