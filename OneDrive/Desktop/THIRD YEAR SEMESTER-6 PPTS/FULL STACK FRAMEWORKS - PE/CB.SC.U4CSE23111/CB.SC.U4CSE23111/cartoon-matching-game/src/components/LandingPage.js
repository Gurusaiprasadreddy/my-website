import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Importing CSS for styles

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/game');
    };

    return (
        <div className="landing-screen">
            <div className="about-box">
                <h1>Cartoon Match</h1>
                <p>Find the matching pairs!</p>
                <p>Use "Show Cards" if you get stuck.</p>
                <button className="big-start-btn" onClick={handleStart}>START GAME</button>
            </div>
        </div>
    );
};

export default LandingPage;
