import React from 'react';
import '../App.css'; 
interface DoctorType {
  name: string;
  city: string;
  expertise: string;
  availability: string;
  // Add other properties as needed
}

interface AvailableDoctorsTableProps {
  doctors: DoctorType[];
}

const AvailableDoctorsTable: React.FC<AvailableDoctorsTableProps> = ({ doctors }) => {
  return (
    <table className="doctors-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Expertise</th>
          <th>Availability</th>
          {/* Add other table headers as needed */}
        </tr>
        <tr>
          <td>Dr. Smitha</td>
          <td>Orthopedics</td>
          <td>Bengaluru</td>
          <td>Mon, Wed, Fri</td>
        </tr>
        <tr>
          <td>Dr. Aditi</td>
          <td>Radiologist</td>
          <td>Mumbai</td>
          <td>Tue, Thu, Sat</td>
        </tr>
        <tr>
          <td>Dr. Avirit</td>
          <td>Cardiology</td>
          <td>Hyderabad</td>
          <td>Tue, Thu, Sat</td>
        </tr>
        <tr>
          <td>Dr. Sameer</td>
          <td>OB/GVN</td>
          <td>Jaipur</td>
          <td>Mon, Wed, Fri</td>
        </tr>
        <tr>
          <td>Dr. Ayush</td>
          <td>Physiotherapy</td>
          <td>Bengaluru</td>
          <td>Tue, Thu, Sat</td>
        </tr>
        <tr>
          <td>Dr. Naina</td>
          <td>Audiologist</td>
          <td>Chennai</td>
          <td>Mon, Wed, Fri</td>
        </tr>
        <tr>
          <td>Dr. Shivam</td>
          <td>Cardiology</td>
          <td>Gorakhpur</td>
          <td>Tue, Thu, Sat</td>
        </tr>
        <tr>
          <td>Dr. Prakriti</td>
          <td>ENT</td>
          <td>Lucknow</td>
          <td>Mon, Wed, Fri</td>
        </tr>
        <tr>
          <td>Dr. Veer</td>
          <td>OB/GVN</td>
          <td>Delhi</td>
          <td>Tue, Thu, Sat</td>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor, index) => (
          <tr key={index}>
            <td>{doctor.name}</td>
            <td>{doctor.city}</td>
            <td>{doctor.expertise}</td>
            <td>{doctor.availability}</td>
            {/* Add other table data cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AvailableDoctorsTable;