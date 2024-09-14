// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Welcome to Your Health Portal</h1>
            <p>Connect with healthcare professionals at your convenience.</p>
            <div style={{ marginTop: '20px' }}>
                <Link to="/call" style={{ marginRight: '10px', padding: '10px 20px', background: 'blue', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                    Join Video Call
                </Link>
                <Link to="/upload" style={{ padding: '10px 20px', background: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                    Upload Medical Report
                </Link>
            </div>
        </div>
    );
};

export default Home;