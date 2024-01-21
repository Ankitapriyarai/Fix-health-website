import React, { useState } from 'react';

import  AvailableDoctorsTable from './AvailableDoctorsTable';

import '../App.css'; 

interface DoctorType {
  name: string;
  city: string;
  expertise: string;
  availability: string;
  // Add other properties as needed
}

interface AvailableDoctorsProps {
  doctors: DoctorType[];
}

const AvailableDoctors: React.FC<AvailableDoctorsProps> = ({ doctors }) => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const handleAvailableDoctorsClick = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <section className="available-doctors">
      <h2 onClick={handleAvailableDoctorsClick} style={{ cursor: 'pointer' }}>
        Available Doctors
      </h2>
      {isTableVisible && <AvailableDoctorsTable doctors={doctors} />}
    </section>
  );
};

export default AvailableDoctors;
