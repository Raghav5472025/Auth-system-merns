import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            // Humare local backend URL par request bhej rahe hain
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            
            // Assignment Rule: Store JWT token in localStorage
            localStorage.setItem('token', res.data.token);
            alert("Login Successful! 🎉");
            
            // Dashboard par redirect karenge
            navigate('/dashboard');
        } catch (err) {
            alert(err.response?.data?.msg || "Login Fail ho gaya ❌");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email: </label>
                    <input type="email" name="email" value={formData.email} onChange={onChange} required style={{ width: '100%' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password: </label>
                    <input type="password" name="password" value={formData.password} onChange={onChange} required style={{ width: '100%' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;