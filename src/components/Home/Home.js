import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import useServices from '../../hooks/useServices'
import HomeDoctor from '../HomeDoctor/HomeDoctor';
import HomeServices from '../HomeServices/HomeServices';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    const [doctors] = useDoctors();
    const [services] = useServices();
    return (
        <>
            <Slider></Slider>
            <Container className="mb-5">
                <Row>
                    <h2 className="mb-5 mt-5 text-center home-h2" >Our Specialist Doctors</h2>
                    {
                        doctors.slice(0, 3).map(doctor => <HomeDoctor
                            key={doctor.key}
                            doctor ={doctor}
                        ></HomeDoctor>)
                    }
                    <h2 className="mb-5 mt-5 text-center home-h2" >Our Special Services</h2>
                    {
                        services.slice(0, 6).map(service => <HomeServices
                            key={service.key}
                            service ={service}
                        ></HomeServices>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;