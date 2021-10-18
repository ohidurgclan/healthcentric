import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HomeServices.css';

const HomeServices = (props) => {
    const { name, star, details, img } = props.service;
    return (
        <>
            <Col lg={6} md={6} sm={12}>
                <div className="card service-card mb-5 w-100">
                    <img className="img img-fluid card-img" src={img} alt="" />
                    <div className="service-info">
                        <h5 className="fw-bold">{name}</h5>
                        <h6 className="fw-bold"><span>{star}</span></h6>
                        <div>
                            <p>{details.slice(0, 150)}</p>
                        </div>
                    <NavLink to="/">
                        <button className="appointment-btn">View Details</button>
                    </NavLink>   
                    </div>
                </div>
            </Col>
        </>
    );
};

export default HomeServices;