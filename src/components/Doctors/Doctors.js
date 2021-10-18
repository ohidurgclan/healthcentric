import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import HomeDoctor from '../HomeDoctor/HomeDoctor';

const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <>
          <Container className="mb-5">
                <Row>
                    <h2 className="mb-5 mt-5 text-center home-h2">Specialist Doctors</h2>
                    {
                        doctors.map(doctor => <HomeDoctor
                            key={doctor.key}
                            doctor ={doctor}
                        ></HomeDoctor>)
                    }
                </Row>
            </Container>  
        </>
    );
};

export default Doctors;