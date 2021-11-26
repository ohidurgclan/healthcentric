import { useEffect, useState } from 'react';

const useDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('https://nameless-falls-24114.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[]);
    return [doctors];
};
export default useDoctors;