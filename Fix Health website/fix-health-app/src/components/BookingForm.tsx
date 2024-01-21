// BookingForm.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../App.css'; 
interface BookingFormProps {}

interface FormData {
  name: string;
  phone: string;
  age: string;
  city: string;
  company: string;
  chiefComplaints: string;
  previousExperience: string;
  [key: string]: string;
}

const BookingForm: React.FC<BookingFormProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    previousExperience: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formSubmissionStatus, setFormSubmissionStatus] = useState<'notSubmitted' | 'submitted'>(
    'notSubmitted'
  );

  const handleBookConsultationClick = () => {
    setIsFormVisible(true);
    setFormSubmissionStatus('notSubmitted');
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const requiredFields = ['name', 'phone', 'age', 'city', 'company', 'chiefComplaints', 'previousExperience'];

    if (requiredFields.some((field) => !formData[field])) {
      alert('Please fill in all details before submitting.');
      return;
    }

    // Perform additional actions as needed with the form data
    // ...

    alert(`Form submitted with data: ${JSON.stringify(formData)}`);

    setFormData({
      name: '',
      phone: '',
      age: '',
      city: '',
      company: '',
      chiefComplaints: '',
      previousExperience: '',
    });

    setIsFormVisible(false);
    setFormSubmissionStatus('submitted');
  };

  const handleExitClick = () => {
    setIsFormVisible(false);
    setFormSubmissionStatus('notSubmitted');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className="booking-form">
      <h2 onClick={handleBookConsultationClick} style={{ cursor: 'pointer' }}>
        Book a Consultation
      </h2>
      {isFormVisible && (
        <>
          <div className="form-header">
            <button className="exit-button" onClick={handleExitClick}>
              Exit
            </button>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Enter your phone number"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                placeholder="Enter your age"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="Enter your city"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                placeholder="Enter your company name"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="chiefComplaints">Chief Complaints</label>
              <textarea
                name="chiefComplaints"
                value={formData.chiefComplaints}
                placeholder="Enter your chief complaints"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="previousExperience">Previous Experience</label>
              <input
                type="text"
                name="previousExperience"
                value={formData.previousExperience}
                placeholder="Enter your previous experience"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {formSubmissionStatus === 'notSubmitted' ? null : (
            <p>
              {formSubmissionStatus === 'submitted'
                ? 'Form submitted successfully!'
                : 'Please fill in all details before submitting.'}
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default BookingForm;
