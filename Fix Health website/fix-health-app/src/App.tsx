import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import HeroImage from './components/HeroImage';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import AvailableDoctors from './components/AvailableDoctors'; // Import the AvailableDoctors component
// Change this import statement in App.tsx
import { DoctorType } from './components/types';


const apiEndpoint = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const App: React.FC = () => {
  const [doctors, setDoctors] = useState<DoctorType[]>([]);
  const { city: urlCity } = useParams<{ city?: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiEndpoint}/doctors?city=${urlCity || ''}`);
        const data = await response.json();
        setDoctors(data);
        console.log('Doctors data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [urlCity]);

  return (
    <div className="App">
      <HeroImage />
      <BookingForm /> {/* Remove the 'doctors' prop */}
      <Testimonials />
      <AvailableDoctors doctors={doctors} />
    </div>
  );
};

export default App;
