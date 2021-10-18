import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HomeDoctor.css'

const HomeDoctor = (props) => {
    const {name, img, role} = props.doctor;
    return (
        <>
            <Col lg={4} md={4} sm={1}>
                <div className="doctor-detail w-100 text-center mt-5">
                    <img className="img img-fluid doctor-img" src={img} alt="" />
                    <h3>{name}</h3>
                    <h5>{role}</h5>
                    <NavLink to="/">
                        <button className="appointment-btn">Get Appointment</button>
                    </NavLink>
                </div>
            </Col>
        </>
    );
};

export default HomeDoctor;