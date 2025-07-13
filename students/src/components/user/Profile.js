import React, { useState, useEffect } from 'react';
import { User, Phone, Mail, Edit3 } from 'lucide-react';
import Layout from '../Layout/Layout';
import '../../styles/Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    hostelBlock: "",
    roomNumber: "",
    course: "",
    passingYear: "",
    role: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authData = localStorage.getItem('auth');
        
        if (authData) {
          const parsed = JSON.parse(authData);
          console.log('Auth data from localStorage:', parsed);
          

          setStudent({
            name: parsed.user?.name || "",
            email: parsed.user?.email || "",
            phone: parsed.user?.phone || "",
            gender: parsed.user?.gender || "",
            hostelBlock: parsed.user?.hostelBlock || "",
            roomNumber: parsed.user?.roomNumber || "",
            course: parsed.user?.course || "",
            passingYear: parsed.user?.passingYear || "",
            role: parsed.user?.role || 0
          });
          setLoading(false);
          return;
        }

        // If no auth data in localStorage, redirect to login
        throw new Error("No authentication data found");

      } catch (err) {
        console.error('Error fetching user data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (field, value) => {
    setStudent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    try {
      const authData = localStorage.getItem('auth');
      if (!authData) return;

      const parsed = JSON.parse(authData);
      const token = parsed.token;

      const response = await fetch('/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          Authorization: token, // Note: your login sets token directly, not "Bearer token"
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      });

      if (response.ok) {
        const updated = await response.json();
        setStudent(updated);
        
        // Update localStorage with new user data
        const newAuthData = {
          ...parsed,
          user: updated
        };
        localStorage.setItem('auth', JSON.stringify(newAuthData));
      }
    } catch (err) {
      console.error("Error updating profile:", err);
    }
    setIsEditing(false);
  };

  if (loading) {
    return (
      <Layout>
        <div className="profile-container">
          <div className="profile-wrapper">
            <p className="loading-text">Loading profile...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="profile-container">
          <div className="profile-wrapper">
            <p className="error-text">Error: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-wrapper">
          <div className="profile-header">
            <div className="profile-header-content">
              <div className="profile-basic-info">
                {isEditing ? (
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="input-name"
                  />
                ) : (
                  <h1 className="profile-name">{student.name || 'Name not provided'}</h1>
                )}

                {isEditing ? (
                  <input
                    type="text"
                    value={student.course}
                    onChange={(e) => handleInputChange('course', e.target.value)}
                    className="input-course"
                  />
                ) : (
                  <p className="profile-course">{student.course || 'Course not provided'}</p>
                )}

                <div className="profile-contact-info">
                  <div className="contact-item">
                    <Mail size={16} />
                    {isEditing ? (
                      <input
                        type="email"
                        value={student.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    ) : (
                      <span>{student.email}</span>
                    )}
                  </div>
                  <div className="contact-item">
                    <Phone size={16} />
                    {isEditing ? (
                      <input
                        type="tel"
                        value={student.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    ) : (
                      <span>{student.phone}</span>
                    )}
                  </div>
                </div>
              </div>

              <button className="edit-button" onClick={isEditing ? handleSave : () => setIsEditing(true)}>
                <Edit3 size={16} />
                {isEditing ? 'Save' : 'Edit Profile'}
              </button>
            </div>
          </div>

          <div className="info-card">
            <h2 className="card-title">
              <User className="icon-blue" size={20} />
              Personal Information
            </h2>
            <div className="card-content">
              {[
                { label: "Full Name", field: "name" },
                { label: "Gender", field: "gender", isSelect: true },
                { label: "Email", field: "email" },
                { label: "Phone", field: "phone" },
                { label: "Hostel Block", field: "hostelBlock" },
                { label: "Room Number", field: "roomNumber" },
                { label: "Course", field: "course" },
                { label: "Passing Year", field: "passingYear" },
              ].map(({ label, field, isSelect }) => (
                <div className="info-item" key={field}>
                  <label className="info-label">{label}</label>
                  {isEditing ? (
                    isSelect ? (
                      <select
                        value={student[field]}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        className="info-select"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={student[field]}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        className="info-input"
                      />
                    )
                  ) : (
                    <p className="info-value">{student[field] || 'Not provided'}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;