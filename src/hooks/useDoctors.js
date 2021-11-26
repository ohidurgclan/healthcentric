import { useEffect, useState } from 'react';

const useDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4030/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[]);
    return [doctors];
};
export default useDoctors;