import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    // Security Guard: Token check karne ke liye
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert("Pehle login karo bhai! 🛑");
            navigate('/login');
        }
    }, [navigate]);

    // Assignment Rule: Logout functionality
    const handleLogout = () => {
        localStorage.removeItem('token'); // Token ko remove kar rahe hain
        alert("Logged out successfully!");
        navigate('/login');
    };

    return (
        <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
            <h2>Welcome to Dashboard! 🎉</h2>
            <p>Aap successfully login ho chuke hain.</p>
            <button 
                onClick={handleLogout} 
                style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;