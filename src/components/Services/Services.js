import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import HomeServices from '../HomeServices/HomeServices';

const Services = () => {
        const [services] = useServices();
    return (
        <>
            <Container className="mb-5">
                <Row>
                    <h2 className="mb-5 mt-5 text-center home-h2" >Special Services</h2>
                    {
                        services.map(service => <HomeServices
                            key={service.key}
                            service ={service}
                        ></HomeServices>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Services;