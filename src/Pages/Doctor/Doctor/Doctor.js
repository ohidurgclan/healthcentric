import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDoctors from '../../../hooks/useDoctors';
import './Doctor.css';

const Doctor = () => {
const [doctors] = useDoctors();
    const { doctorId } = useParams()
    const [singleDoctor, setsingleDoctor] = useState({});

    useEffect (() => {
        const foundDoctor = doctors.find(doctor => doctor.key === doctorId);
        setsingleDoctor(foundDoctor);
    }, [doctors, doctorId])

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="d-flex docctor-cards card">
                        <div className="doctors-img">
                            <img className="img img-fluid single-doctor-img" src={singleDoctor?.img} alt="" />
                        </div>
                        <div className="doctor-info">
                            <h2>{singleDoctor?.name}</h2>
                            <h4>{singleDoctor?.role}</h4>
                            <h6><span>Phone: </span> {singleDoctor?.phone}</h6>
                            <h6><span>Email: </span> {singleDoctor?.mail}</h6>
                            <h6><span>Fax: </span> {singleDoctor?.fax}</h6>
                            <p>{ singleDoctor?.remark}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Doctor;