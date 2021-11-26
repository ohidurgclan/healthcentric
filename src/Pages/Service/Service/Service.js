import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import './Service.css';

const Service = () => {
    const [services] = useServices();
    const { serviceId } = useParams()
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        const foundService = services.find(service => service.key === serviceId);
        setSingleService(foundService);
    }, [services, serviceId])

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="d-flex service-cards card">
                        <div className="detail-img">
                            <img className="img img-fluid detail-img" src={singleService?.img} alt="" />
                        </div>
                        <div className="detail-info">
                            <h2>{singleService?.name}</h2>
                            <h5>Rating:  <Rating className="mt-3"
                    emptySymbol="far fa-star rating-color"
                    fullSymbol="fas fa-star rating-color"
                    initialRating={singleService?.star}
                /> </h5>
                            <p>{singleService?.details}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Service;