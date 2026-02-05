import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const FeedbackForm = () => {
    const navigate = useNavigate();

    // State for all fields
    const [childName, setChildName] = useState('');
    const [age, setAge] = useState('');
    const [learning, setLearning] = useState(''); // 'Focus', 'Memory', 'Both'
    const [easyToUse, setEasyToUse] = useState(''); // 'Yes', 'No'
    const [likedFeatures, setLikedFeatures] = useState({
        visuals: false,
        cards: false,
        celebrations: false
    });
    const [additionalFeedback, setAdditionalFeedback] = useState('');

    const handleFeatureChange = (feature) => {
        setLikedFeatures(prev => ({
            ...prev,
            [feature]: !prev[feature]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!childName.trim() || !age.trim()) {
            alert("Please enter the child's Name and Age to submit.");
            return;
        }

        console.log({
            childName,
            age,
            learning,
            easyToUse,
            likedFeatures,
            additionalFeedback
        });
        alert("Thank you for your valuable feedback!");
        navigate('/');
    };

    return (
        <div className="landing-screen">
            {/* White Card Container */}
            <div className="feedback-card">
                <h1 className="feedback-title">CHILD<br />FEEDBACK</h1>

                <form onSubmit={handleSubmit} className="feedback-form">

                    {/* Child Name */}
                    <div className="form-group-styled">
                        <label>Child Name</label>
                        <input
                            type="text"
                            placeholder="Enter child's name"
                            value={childName}
                            onChange={(e) => setChildName(e.target.value)}
                        />
                    </div>

                    {/* Age */}
                    <div className="form-group-styled">
                        <label>Age</label>
                        <input
                            type="number"
                            placeholder="Enter age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    {/* What did the child learn? */}
                    <div className="form-group-styled">
                        <label>What did the child learn?</label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="learning"
                                    value="Focus"
                                    checked={learning === 'Focus'}
                                    onChange={(e) => setLearning(e.target.value)}
                                />
                                <span>Focus 🎯</span>
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="learning"
                                    value="Memory"
                                    checked={learning === 'Memory'}
                                    onChange={(e) => setLearning(e.target.value)}
                                />
                                <span>Memory 🧠</span>
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="learning"
                                    value="Both"
                                    checked={learning === 'Both'}
                                    onChange={(e) => setLearning(e.target.value)}
                                />
                                <span>Both ✨</span>
                            </label>
                        </div>
                    </div>

                    {/* Was the game easy to use? */}
                    <div className="form-group-styled">
                        <label>Was the game easy to use?</label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="easyToUse"
                                    value="Yes"
                                    checked={easyToUse === 'Yes'}
                                    onChange={(e) => setEasyToUse(e.target.value)}
                                />
                                <span>Yes 👍</span>
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="easyToUse"
                                    value="No"
                                    checked={easyToUse === 'No'}
                                    onChange={(e) => setEasyToUse(e.target.value)}
                                />
                                <span>No 👎</span>
                            </label>
                        </div>
                    </div>

                    {/* What features did the child like? */}
                    <div className="form-group-styled">
                        <label>What features did the child like?</label>
                        <div className="checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={likedFeatures.visuals}
                                    onChange={() => handleFeatureChange('visuals')}
                                />
                                <span>Visuals 🎨</span>
                            </label>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={likedFeatures.cards}
                                    onChange={() => handleFeatureChange('cards')}
                                />
                                <span>Cards 🃏</span>
                            </label>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={likedFeatures.celebrations}
                                    onChange={() => handleFeatureChange('celebrations')}
                                />
                                <span>Celebrations 🎉</span>
                            </label>
                        </div>
                    </div>

                    {/* Additional Feedback */}
                    <div className="form-group-styled">
                        <textarea
                            placeholder="Additional Feedback"
                            rows="3"
                            value={additionalFeedback}
                            onChange={(e) => setAdditionalFeedback(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="submit-btn-purple">
                        Submit Feedback
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#777',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            marginTop: '15px',
                            textDecoration: 'underline',
                            width: '100%'
                        }}
                    >
                        Go Back
                    </button>

                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
