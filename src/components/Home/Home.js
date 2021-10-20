import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useDoctors from '../../hooks/useDoctors';
import useServices from '../../hooks/useServices'
import Feedslider from '../Feedslider/Feedslider';
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
            <Container>
                <Row className="button-center mb-5">
                    <h2 className="mb-5 mt-5 text-center home-h2" >Our Specialist Doctors</h2>
                    {
                        doctors.slice(0, 3).map(doctor => <HomeDoctor
                            key={doctor.key}
                            doctor ={doctor}
                        ></HomeDoctor>)
                    }
                    <NavLink to="/doctor">
                        <button className="view-btn mt-5">View More Specialist</button>
                    </NavLink>
                </Row>
                <Row className="button-center mb-5">
                    <h2 className="mb-5 mt-5 text-center home-h2" >Our Special Services</h2>
                    {
                        services.slice(0, 6).map(service => <HomeServices
                            key={service.key}
                            service ={service}
                        ></HomeServices>)
                    }
                    <NavLink to="/services">
                        <button className="view-btn mt-5">View More Services</button>
                    </NavLink>
                </Row>
                <Row>
                    <h2 className="text-center mt-5 home-h2">Satisfied Patients Reviews</h2>
                    <Feedslider></Feedslider>
                </Row>
            </Container>
        </>
    );
};

export default Home;