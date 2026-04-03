import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            alert("Registration Successful! 🎉 Ab login karo.");
            navigate('/login');
        } catch (err) {
            alert(err.response?.data?.msg || "Registration Fail ho gaya ❌");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Name: </label>
                    <input type="text" name="name" value={formData.name} onChange={onChange} required style={{ width: '100%' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email: </label>
                    <input type="email" name="email" value={formData.email} onChange={onChange} required style={{ width: '100%' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password: </label>
                    <input type="password" name="password" value={formData.password} onChange={onChange} required style={{ width: '100%' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>Register</button>
            </form>
        </div>
    );
};

export default Register;